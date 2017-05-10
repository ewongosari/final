$(document).ready(function() {

  //Initialize MDB Wow Animations
  new WOW().init();

  //Toggle Contact Form
  $('#contactForm').click(function() {
    $('#contact').toggle('slide', {direction: 'down'}, 500);
  });

  //Formative Quizzes
  //String Quiz
  function submitAnswers1() {
    //Set Variables
    var totalQuestions1 = 3;
    var correct1 = 0;
    //Get user input
    var q1 = document.forms["quizForm1"] ["q1"].value;
    var q2 = document.forms["quizForm1"] ["q2"].value;
    var q3 = document.forms["quizForm1"] ["q3"].value;
    //Alert if some questions have not been answered
    for (i = 1; i <= 3; i++) {
      if (eval('q' + i) == null || eval('q' + i) == '') {
        alert('You missed some questions! Please complete the quiz before submitting.');
        return false;
      }
    }
    // Set Correct Answers
    var answers1 = ["a","b","a"];
    //Check Answers
    for (i = 1; i <= 3; i++) {
      if(eval('q' + i) == answers1[i - 1]) {
        correct1++;
      }
    }
    //Display Results
    var score1 = document.getElementById('stringResults');
    alert('You got ' + correct1 +' out of ' + totalQuestions1 + ' questions!');
  };
  //Woodwind Quiz
  function submitAnswers2() {
    //Set Variables
    var totalQuestions2 = 3;
    var correct2 = 0;
    //Get user input
    var q4 = document.forms["quizForm2"] ["q4"].value;
    var q5 = document.forms["quizForm2"] ["q5"].value;
    var q6 = document.forms["quizForm2"] ["q6"].value;
    //Alert if some questions have not been answered
    for (i = 4; i <= 6; i++) {
      if (eval('q' + i) == null || eval('q' + i) == '') {
        alert('You missed some questions! Please complete the quiz before submitting.');
        return false;
      }
    }
    // Set Correct Answers
    var answers2 = ["a","a","b"];
    //Check Answers
    for (i = 4; i <= 6; i++) {
      if(eval('q' + i) == answers2[i - 1]) {
        correct2++;
      }
    }
    //Display Results
    var score2 = document.getElementById('woodwindResults');
    alert('You got ' + correct2 +' out of ' + totalQuestions2 + ' questions!');
    return false;
  };
  //Brass Quiz
  function submitAnswers3() {
    //Set Variables
    var totalQuestions3 = 3;
    var correct3 = 0;
    //Get user input
    var q7 = document.forms["quizForm3"] ["q7"].value;
    var q8 = document.forms["quizForm3"] ["q8"].value;
    var q9 = document.forms["quizForm3"] ["q9"].value;
    //Alert if some questions have not been answered
    for (i = 7; i <= 9; i++) {
      if (eval('q' + i) == null || eval('q' + i) == '') {
        alert('You missed some questions! Please complete the quiz before submitting.');
        return false;
      }
    }
    // Set Correct Answers
    var answers3 = ["b","a","a"];
    //Check Answers
    for (i = 7; i <= 9; i++) {
      if(eval('q' + i) == answers3[i - 1]) {
        correct3++;
      }
    }
    //Display Results
    var score3 = document.getElementById('brassResults');
    alert('You got ' + correct3 +' out of ' + totalQuestions3 + ' questions!');
  };
  //Percussion Quiz
  function submitAnswers4() {
    //Set Variables
    var totalQuestions4 = 3;
    var correct4 = 0;
    //Get user input
    var q10 = document.forms["quizForm4"] ["q10"].value;
    var q11 = document.forms["quizForm4"] ["q11"].value;
    var q12 = document.forms["quizForm4"] ["q12"].value;
    //Alert if some questions have not been answered
    for (i = 10; i <= 12; i++) {
      if (eval('q' + i) == null || eval('q' + i) == '') {
        alert('You missed some questions! Please complete the quiz before submitting.');
        return false;
      }
    }
    // Set Correct Answers
    var answers4 = ["b","a","b"];
    //Check Answers
    for (i = 10; i <= 12; i++) {
      if(eval('q' + i) == answers4[i - 1]) {
        correct4++;
      }
    }
    //Display Results
    var score4 = document.getElementById('percussionResults');
      alert('You got ' + correct4 +' out of ' + totalQuestions4 + ' questions!');
      return false;
  };

});


  //Final Quiz
  function chooseInstrument() {
    //Set variables
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    //Get user input
    var choices = document.getElementsByTagName('input');
    // Goes through answers and add them
    for (i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
      }
    }
    //Calculate highest score
    var maxscore = Math.max(c1score,c2score,c3score,c4score);
    //Display results based on score
    var result = document.getElementById('chooseResults');
      if (c1score == maxscore) {
        alert('You should learn to play the violin!');
        return false;
      }
      if (c2score == maxscore) {
        alert('You should learn to play the flute!');
        return false;
      }
      if (c3score == maxscore) {
        alert('You should learn to play the trumpet!');
        return false;
      }
      if (c4score == maxscore) {
        alert('You should learn to play the xylophone!');
        return false;
      }
  };
