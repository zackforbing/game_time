const $    = require('jquery');
const Game = require('./game');

var canvas  = document.getElementById('game');
var context = canvas.getContext('2d');
var game = new Game({canvas: canvas, context: context});


$(document).ready(function(){
  var startingScreen = $('#game-start');
  var gameWindow     = $("#game").hide();
  $("#game-end").hide();
  localStorage.getItem('userScore');
  game.highScores();

  $(document).on('keyup', function(key) {
    if(key.which === 83) {
      var game = new Game({canvas: canvas, context: context});
      game.over = false;
      startingScreen.hide();
      gameWindow.show();
      game.addKeyListeners.call(game);
      game.loop();
    }
  });
});
