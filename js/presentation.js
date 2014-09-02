(function() {

  // $(document).on('click', 'button.create', function(){
  //   var title = $('title-input').val();

  // })

  
  $(document).on('click', 'button.start', function() {
    var name = $('#name-input').val();
    bl.newPlayer(name);
    bl.gameRestart();
    $('#name-input').hide();
    $('.start').hide();
    $('.create').hide();
    showQuestion();
    $('.answers').show();
    $('.question').show();
    $('.submit').show();
  });

  $(document).on('click','button.submit', function() {
    var result = $('form').serialize();
    var eachQuestion = $('.answers').attr('data-question');

    var car = bl.checkAnswer(result[7]);
    if (car) {
      // $('.win').show();
      $(".win").show().delay(3000).fadeOut();
      bl.questionCount(eachQuestion);
      bl.answerCount(eachQuestion);
    } else {
      // $('.lose').show();
      $(".lose").show().delay(3000).fadeOut();
      bl.questionCount(eachQuestion);
    }
    if (bl.isGameOver()) {
      gameOver();
    } else {
      showQuestion();
    }

  });

  $(document).on('click','button.newgame', function() {
    $('#name-input').show().val('');
    $('.question').hide();
    $('.answers').hide();
    $('.start').show();
    $('.newgame').hide();
  });

  var showQuestion = function() {
    var question = bl.pickRandomQuestion();
    var avg = Math.floor((question.correct/question.asked)*100);
    if (!avg) {
      avg = '';
    }

    $("input:checked").removeAttr("checked")
    $('.question').empty().html("<h3>"+question.question+"</h3>"+ "<br> <h6>Question Average Correct: "+avg+"%</h6>");
    $('.answers').attr('data-question', question.id);
    $('.answers').find('span').remove();
    $('.answers').find('.one').append("<span>"+question.choices[0]+"</span>");
    $('.answers').find('.two').append("<span>"+question.choices[1]+"</span>");
    $('.answers').find('.three').append("<span>"+question.choices[2]+"</span>");
    $('.answers').find('.four').append("<span>"+question.choices[3]+"</span>");
  };

  var updateLeaderboard = function() {
    lead = bl.getLeaders();
    console.log(lead);
    $('.place').empty();
    for (i = 0; i < lead.length; i++) {
      $('.place').append('<li>' + lead[i].name + "  -  " + lead[i].score + '</li>');
    }

  };

  var gameOver = function() {
    var score = bl.getScore();
    bl.logPlayerScore(score);
    updateLeaderboard();
    $('.submit').hide();
    $('.answers').hide();
    $('.question').empty().html("<h3>Score: " +score+"/10</h3>");
    if (score < 4) {
      $('.question').append("<h4>I knew you didn't know anything</h4>");
    } else if (score >= 4 && score < 7) {
      $('.question').append("<h4>Eh...not half bad</h4>");
    } else if (score >= 7) {
      $('.question').append("<h4>Official Gear Head</h4>");
    }
    $('.newgame').show();
  };

  
})();