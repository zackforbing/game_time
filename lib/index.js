require('./background')
var Player = require('./player')
var GameLoop = require('./gameLoop')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var gameLoop = new GameLoop();
var player = new Player(gameLoop);

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.
//   context.fillRect(player.size.x, player.size.y, player.width, player.height);
//   requestAnimationFrame(gameLoop);
// });


var canvas = document.getElementById("game");
var context = canvas.getContext("2d");


//draw Image
var velocity = 100;
var bgImage = new Image();

bgImage.addEventListener('load',drawImage,false);

bgImage.src = "https://files.slack.com/files-pri/T029P2S9M-F2NM89LUS/n8dawg.jpg";
bgImage.height = 1800;
bgImage.width = 1800;

function drawImage(time){
    var framegap = time - lastRepaintTime;
		lastRepaintTime = time;

		var translateX = velocity * (framegap/1000);
		context.clearRect(0,0,canvas.width,canvas.height);

	 	var pattern = context.createPattern(bgImage,"repeat-y");

		context.fillStyle = pattern;
		context.rect(translateX,0,bgImage.width,bgImage.height);
	  context.fill();

    context.translate(0,translateX);
	requestAnimationFrame(drawImage);
}
var lastRepaintTime = window.performance.now();
