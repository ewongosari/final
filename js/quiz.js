var listString = [{
	question: "What are baby beavers called?",
	choices: ["Puppies", "Calfs", "Kittens", "Lambs"],
	answer: 2
},
{
	question: "What is the fastest land snake in the world?",
	choices: ["Black Mamba", "Python", "Rattle Snake", "Boa Constrictor"],
	answer: 0
},
{
	question: "Which animal is incorrectly rumored to bury its head in the sand when frightened?",
	choices: ["Rabbit", "Ostrich", "Mole", "Flamingo"],
	answer: 1
},
{
	question: "What is the smallest and most endangered species of sloth?",
	choices: ["Bradypus pygmaeus", "Bradypus torquatus", "Bradypus tridactylus", "Bradypus variegatus"],
	answer: 0
},
{
	question: "What famous horse was the longest to hold the triple crown?",
	choices: ["Sea Biscuit", "Black Beauty", "Flicka", "Secretariat"],
	answer: 3
}
}];

var listWoodwind = [{
	question: "Which artist is credited with developing linear perspective?",
	choices: ["Brunelleschi", "Warhol", "Picasso", "Dali"],
	answer: 0
},
{
	question: "Which French sculptor created the Statue of Liberty?",
	choices: ["Edgar Degas", "Camille Pissarro", "Henri Fantin-Latour", "Frédéric Auguste Bartholdi"],
	answer:	3
},
{
	question: "Which artist created the sculpture, 'The Thinker'?",
	choices: ["Edgar Degas", "Auguste Rodin", "Henri Fantin-Latour", "Camille Pissarro"],
	answer:	1
},
{
	question: "Who painted the famous Dutch Golden age painting 'The Night Watch'?",
	choices: ["van Gogh", "Rembrandt", "Hals", "Steen"],
	answer:	1
},
{
	question: "What color do you get when you mix yellow and blue?",
	choices: ["Teal", "Purple", "Green", "Red"],
	answer:	2
}
}];

var listBrass = [
{
	question: "What is the largest organ of the human body?",
	choices: ["Brain", "Skeleton", "Heart", "Skin"],
	answer: 3
},
{
	question: "What is the term for cell death?",
	choices: ["Apoptosis", "Mitosis", "Osmosis", "Diffusion"],
	answer: 0
},
{
	question: "What does the acronym DNA stand for?",
	choices: ["Dinitrogen Acetate", "Determined Not Active", "Deoxyribonucleic acid", "Denucleated actins"],
	answer: 2
},
{
	question: "Name the process used by plants to convert light energy into chemical energy.",
	choices: ["Photosynthesis", "Mitosis", "Absorption", "Diffusion"],
	answer: 0
},
{
	question: "What is a fertilized egg called?",
	choices: ["Larva", "Zygote", "Embryo", "Fetus"],
	answer: 1
}
}];

var listPercussion = [
{
	question: "What is the chemical symbol for Gold?",
	choices: ["Pb", "Ni", "Au", "Ge"],
	answer: 2
},
{
	question: "Acids release which ion?",
	choices: ["OH-", "H+", "H-", "O-"],
	answer: 1
},
{
	question: "What is a positively charged ion?",
	choices: ["Anion", "Ion", "Electron", "Cation"],
	answer: 3
},
{
	question: "What is the most abundant element in the earth's atmosphere?",
	choices: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
	answer: 2
},
{
	question: "What is the mass of water?",
	choices: ["18 grams", "33 grams", "3 grams", "28 grams"],
	answer: 0
}
}];

//Get values
var next = document.getElementById("back");
var back = document.getElementById("next");
var reset = document.getElementById("reset");
var num = document.getElementById("num");
var quest = document.getElementById("question");
var choices = document.getElementsByName("choice");
var catButtons = document.getElementsByClassName("cat");
var labels = document.getElementsByTagName("label");

//Quiz object
function quiz(mainId, quizId, resultsId, choiceId, msgId) {
	this.mainId = mainId;
	this.quizId = quizId;
	this.resultsId = resultsId;
  this.choiceId = choiceId;
	this.msgId = msgId;
  this.checked = false;
  this.choice = '';
  this.selection = '';
	this.count = 0;
	this.question = '';
	this.currentScore = '';
	this.score = 0;
	this.list = '';
	this.selections = {
		1:'',
		2:'',
		3:'',
		4:'',
		5:''
	};
}

//Starts the quiz for selected category
quiz.prototype.getCategory = function(value) {
	this.list = window[value];
	this.fillForm(this.count);
	this.showQuestion();
}

//Populates the page with a new question and 4 possible answers
quiz.prototype.fillForm = function() {
  if(this.list[this.getCount()].question) {
    var choices = document.getElementsByName(this.choiceId);
    this.question = this.getCount() + 1;
    num.innerHTML = this.question;
    quest.innerHTML = this.list[this.getCount()].question;
    for (var i = 0; i < choices.length; i++) {
      choices[i].innerHTML = this.list[this.getCount()].choices[i];
    }
  }
}

//Calls functions when the 'next' button is clicked. If no answer is selected, the user is alerted.
//If all questions are answered, the final score is announced to the user
quiz.prototype.nextQuestion = function() {
  if(!this.checked) {
    this.requireInput();
  } else {
    this.checkFinish();
  }
}

//Increase count used to track progress through the questions
quiz.prototype.increaseCount = function() {
  this.count++;
}

//Returns count used to track progress through the questions
quiz.prototype.getCount = function() {
  return this.count;
}

//Checks if all questions have been answered. If true, user is notified of final score.
//If false, the next question is loaded
quiz.prototype.checkFinish = function() {
  this.increaseCount();
  if(this.getCount() == this.list.length) {
    this.reportScore();
  } else {
    this.checked = false;
    this.fillForm();
    this.setNextChoice();
  }
}

//Updates score and tracks user's answers
quiz.prototype.updateAll = function() {
  this.selections[this.question] = this.getSelection();
  this.getCurrentAnswer();
  this.currentScore = this.calcScore();
}

//Returns value of property used to track when an answer has been provided by the user
quiz.prototype.getChoice = function() {
  return this.checked;
}

//Notification given when user doesn't provide an answer for a question
quiz.prototype.requireInput = function() {
  alert("Please select an answer before moving to the next question.");
}

//Shows answers when moving between questions that have been answered by user
quiz.prototype.setNextChoice = function() {
	if(this.selections[this.question]) {
    this.clearBtns();
		this.getPreviousChoice(this.count);
	} else {
		this.clearBtns();
	}
}

//Notification of final score to user at the end of the quiz
quiz.prototype.reportScore = function() {
	document.getElementById(this.quizId).style.visibility = "hidden";
	document.getElementById(this.resultsId).style.visibility = "visible";
	var message = document.getElementById(this.msgId);
	message.innerHTML = this.currentScore;
}

//Tracks answer provided by user
quiz.prototype.getCheckedValue = function(id) {
  !this.getChoice() ? this.checked = true : (this.checked = false, this.removeChecked());
	this.choice = document.getElementById(id);
  this.choice.classList.toggle("active");
  this.selection = this.choice.value;
  this.updateAll();
}

//Allows user to change answer and removes highlighting from previous answer
quiz.prototype.removeChecked = function() {
  this.checked = true;
  this.choice.classList.remove("active");
}

//Returns value for user's answer to the current question
quiz.prototype.getSelection = function() {
  return this.selection;
}

//Returns answer for the current question
quiz.prototype.getCurrentAnswer = function() {
	for(var q = 0; q < this.list.length; q++) {
		if(this.list[q].question == quest.innerHTML) {
			return this.list[q].answer;
		}
	}
}

//Calculates current score based on all answered questions
quiz.prototype.calcScore = function() {
	if(this.getSelection() == this.getCurrentAnswer()) {
		this.score += 1;
	}
	return "Your have answered correctly: " + this.score + " out of " + this.list.length + " questions. ";
}

//Removes 'active' class when a new, unanswered, question is loaded
quiz.prototype.clearBtns = function() {
	var choices = document.getElementsByName(this.choiceId);
	for (var r = 0; r < choices.length; r++) {
    choices[r].classList.remove("active");
	}
}

//Provides answer to previously answered question
quiz.prototype.getPreviousChoice = function(position) {
  this.checked = true;
	var choices = document.getElementsByName(this.choiceId);
	for (var c = 0; c < choices.length; c++) {
		if(choices[c].value == this.selections[this.question]) {
			choices[c].classList.add("active");
		}
	}
}

//Provides answer to previous question when using 'back' button
quiz.prototype.back = function() {
	this.count--;
  this.clearBtns();
	if(this.count >= 0) {
		this.fillForm();
		this.getPreviousChoice(this.count);
	}
}

//Deletes all quiz data and returns all property values to the original values
quiz.prototype.clearAll = function() {
	this.count = 0;
	this.question = '';
	this.currentScore = '';
	this.score = 0;
	this.list = '';
	var selections = this.selections;
	for(var s in selections) {
		selections[s] = '';
	}
}

//Calls functions to delete all game data and shows user the main category page
quiz.prototype.startOver = function() {
	document.getElementById(this.resultsId).style.visibility = "hidden";
	document.getElementById(this.mainId).style.visibility = "visible";
	this.clearRadio();
	this.clearAll();
}

var myTrivia = new quiz("main", "quiz_area", "results", "choice", "message");
for(var i = 0; i < catButtons.length; i++) {
	catButtons[i].addEventListener("click", function() {
		myTrivia.getCategory(this.id, "main", "quiz_area");
	});
}

next.addEventListener("click", function() {
	myTrivia.nextQuestion();
});

back.addEventListener("click", function() {
	myTrivia.back();
});

reset.addEventListener("click", function() {
	myTrivia.startOver();
});

var choices = document.getElementsByName("choice");
for(var c = 0; c < choices.length; c++) {
  choices[c].addEventListener("click", function() {
    myTrivia.getCheckedValue(this.id);
  });
}
