$(document).ready(function() {

  $('#memorygame').quizyMemoryGame({itemWidth: 120, itemHeight: 120, itemsMargin:10, colCount:5, animType:'flip' , flipAnim:'rl', animSpeed:150, resultIcons:true, randomised:true});

    $('#reset').click(function(){
      $('#memorygame').quizyMemoryGame('restart');
      return false;
    });
});
