(function() {


  var BusinessLogic = function() {

    var allQuestions = [{
        id: 1, 
        question:"What was the first year of the Ford Mustang?",
        choices:["1965","1964","1963","1962"],
        answer: 2,
        asked: 0,
        correct: 0 },
      { 
        id: 2, 
        question:"What number Evo is currently in production",
        choices:["X","IX","XIII","XII"],
        answer: 1,
        asked: 0,
        correct: 0 },
      { 
        id: 3, 
        question:"What is the car most bought in Texas?",
        choices:["Silverado","F-150","Ram","Corolla"],
        answer: 2,
        asked: 0,
        correct: 0 },
      { 
        id: 4, 
        question:"What is the 0-60 on the 2013 Bugatti Veyron?",
        choices:["3.5 sec","1.9 sec","2.4 sec","2.9 sec"],
        answer: 3,
        asked: 0,
        correct: 0 },
      { 
        id: 5, 
        question:"How much horsepower does the new LaFerrari",
        choices:["949hp","700hp","825hp","879hp"],
        answer: 1,
        asked: 0,
        correct: 0 },
      { 
        id: 6, 
        question:"A car uses a four-stroke engine. The four strokes are:",
        choices:["intake, compression, ignition and exhaust","injection, rotation, ignition and exhaust",
        "injection, carburetion, rotation and exhaust","injection, intake, rotation and exhaust"],
        answer: 1,
        asked: 0,
        correct: 0 },
      { 
        id: 7, 
        question:"There are three basic failures that can happen in an engine: bad fuel mix, lack of compression and:",
        choices:["lack of exhaust","lack of water","lack of spark","lack of oil"],
        answer: 3,
        asked: 0,
        correct: 0 },
      { 
        id: 8, 
        question:"What is a turbocharger?",
        choices:["a set of gears that makes the wheels turn faster","a turbine that compresses the air traveling into the engine","an injector that delivers fuel to the engine faster","belt driven device that pressurizes air intake"],
        answer: 2,
        asked: 0,
        correct: 0 },
      { 
        id: 9, 
        question:"Which vehicle has the most torque?",
        choices:["Volkswagen Touareg","Corvette ZR1","Mercedes SLR","Dodge Viper SRT-8"],
        answer: 1,
        asked: 0,
        correct: 0 },
      { 
        id: 10, 
        question:"Which car is the fastest hybrid ?",
        choices:["Toyota Prius","LaFerrari","Tesla Type-S","Fisker Karma"],
        answer: 2,
        asked: 0,
        correct: 0 }
      ]
    var asked = [];
    var score = 0;
    var lastAnswer = -1;
    var players = [];


    this.pickRandomQuestion = function() {
      if (asked.length === allQuestions.length) {
        return false;
      }
      var check = 0;
      while (check !== -1) {
        var random = Math.floor((Math.random() * 10) + 0);
        check = $.inArray(random, asked);
        if (check === -1) {
          asked.push(random);
          question = allQuestions[random];
          lastAnswer = question.answer;

          return question;
        }
      }
    };

    this.checkAnswer = function(answer) {
      if (answer == (lastAnswer - 1)) {
        score += 1;
        return true;
      } else {;
        return false;
      }
    };

    this.getScore = function() {
      return score;
    };
    
    this.isGameOver = function() {
      if (asked.length === allQuestions.length) {
        return true;
      } else {
        return false;
      }
    };
      
    this.gameRestart = function() {
      asked = [];
      lastAnswer = -1;
      score = 0;
    };

    this.newPlayer = function(player) {
      players.push({name: player, score: undefined});
    };

    this.logPlayerScore = function(score) {
      _.last(players).score = score
      // console.log(players);
    };

    this.getLeaders = function() {
      leader = _.sortBy(players, 'score');

        return leader.reverse();

    };

    this.questionCount = function(id) {
      x = allQuestions[id - 1];
      x.asked += 1;

    };

    this.answerCount = function(id) {
      x = allQuestions[id-1];
      x.correct += 1;
      console.log(allQuestions[id-1]);
    };


  };

  window.bl = new BusinessLogic();
})();