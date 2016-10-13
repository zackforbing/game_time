const $        = require('jquery');
                 require('./background');
const Player   = require('./player');
const GameLoop = require('./gameLoop');
const Bullet   = require('./bullet');

var gameLoop = new GameLoop();
var bullet   = new Bullet();

var player   = new Player({ gameLoop: gameLoop, bullet: bullet });

$(document).ready(function(){
  player.draw(gameLoop);
});

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.
//   context.fillRect(player.size.x, player.size.y, player.width, player.height);
//   requestAnimationFrame(gameLoop);
// });









//draw Image
// var velocity = 100;
// var bgImage = new Image();
//
// bgImage.addEventListener('load',drawImage,false);
//
// bgImage.src = "https://files.slack.com/files-pri/T029P2S9M-F2NM89LUS/n8dawg.jpg";
// bgImage.height = 1800;
// bgImage.width = 1800;

// function drawImage(time){
//     var framegap = time - lastRepaintTime;
// 		lastRepaintTime = time;
//
// 		var translateY = velocity * (framegap/1000);
// 		context.clearRect(0,0,canvas.width,canvas.height);
//
// 	 	var pattern = context.createPattern(bgImage,"repeat-y");
//
// 		context.fillStyle = pattern;
// 		context.rect(translateY,0,bgImage.width,bgImage.height);
// 	  context.fill();
//
//     context.translate(0,translateY);
// 	requestAnimationFrame(drawImage);
// }
// var lastRepaintTime = window.performance.now();
