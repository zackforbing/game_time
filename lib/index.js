const $        = require('jquery');
                 require('./background');
const Player   = require('./player');
const Enemy    = require('./enemy');
const GameLoop = require('./gameLoop');
const Bullet   = require('./bullet');

var gameLoop = new GameLoop();
var bullet   = new Bullet();

var player   = new Player({ gameLoop: gameLoop, bullet: bullet });
var enemy   = new Enemy({ gameLoop: gameLoop, bullet: bullet });

$(document).ready(function(){

  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');

  player.draw(gameLoop);
  enemy.draw(gameLoop);

  var velocity = 100;
  var bgImage = new Image();

  bgImage.addEventListener('load',drawImage,false);
  bgImage.src = "https://files.slack.com/files-pri/T029P2S9M-F2NM89LUS/n8dawg.jpg";
  bgImage.height = 1800;
  bgImage.width = 1800;

  function drawImage(time){
      var framegap = time - lastRepaintTime;
      debugger;
  		lastRepaintTime = time;

  		var translateY = velocity * (framegap/1000);
  		gameLoop.context.clearRect(0, 0, gameLoop.canvas.width, gameLoop.canvas.height);

      // var pattern = gameLoop.context.createPattern(bgImage,"repeat-y");

  		// gameLoop.context.fillStyle = pattern;
  		gameLoop.context.rect(translateY, 0, bgImage.width, bgImage.height);
  	  gameLoop.context.fill();

      gameLoop.context.translate(0,translateY);
      player.draw(gameLoop);
  	requestAnimationFrame(drawImage);
  }
  var lastRepaintTime = window.performance.now();


});
