const $    = require('jquery');
const Game = require('./game');
const Pool = require('./pool');

var canvas  = document.getElementById('game');
var context = canvas.getContext('2d');

var game    = new Game({canvas: canvas, context: context});
// var pool    = new Pool({ maxSize: 30, game: game });

$(document).ready(function(){
  game.loop();

// }

  // var bgImage = new Image();
  //
  // bgImage.addEventListener('load',drawImage,false);
  // bgImage.src = "https://files.slack.com/files-pri/T029P2S9M-F2NM89LUS/n8dawg.jpg";
  // bgImage.height = 1800;
  // bgImage.width = 1800;
  //
  // function drawImage(time){
  //     var framegap = time - lastRepaintTime;
  //     debugger;
  // 		lastRepaintTime = time;
  //
  // 		var translateY = velocity * (framegap/1000);
  // 		gameLoop.context.clearRect(0, 0, gameLoop.canvas.width, gameLoop.canvas.height);
  //
  //     // var pattern = gameLoop.context.createPattern(bgImage,"repeat-y");
  //
  // 		// gameLoop.context.fillStyle = pattern;
  // 		gameLoop.context.rect(translateY, 0, bgImage.width, bgImage.height);
  // 	  gameLoop.context.fill();
  //
  //     gameLoop.context.translate(0,translateY);
  //     player.draw(gameLoop);
  // 	requestAnimationFrame(drawImage);
  // }
  // var lastRepaintTime = window.performance.now();


});
