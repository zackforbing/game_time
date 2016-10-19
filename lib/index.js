const $    = require('jquery');
const Game = require('./game');
// const Pool = require('./pool');

var canvas  = document.getElementById('game');
var context = canvas.getContext('2d');

var game    = new Game({canvas: canvas, context: context});
// var pool    = new Pool({ maxSize: 30, game: game });

$(document).ready(function(){
  game.addKeyListeners.call(game);
  game.loop();
});
