// require('./background')
// require('./player')

// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');
//
//
// var x = 50;
// var y = 50;
// var width = 10;
// var height = 10;
//
// context.fillRect(50, 50, 10, 10);


// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.
//
//   context.fillRect(x, y++, width, height);
//   requestAnimationFrame(gameLoop);
// });


var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 800;

//draw Image
var velocity = 100;
var bgImage = new Image();

bgImage.addEventListener('load',drawImage,false);

bgImage.src = "https://files.slack.com/files-pri/T029P2S9M-F2NM89LUS/n8dawg.jpg";
bgImage.height = 600;
bgImage.width = 800;

function drawImage(time){
    var framegap = time - lastRepaintTime;
		lastRepaintTime = time;

		var translateX = velocity * (framegap/1000);
		ctx.clearRect(0,0,canvas.width,canvas.height);

	 	var pattern = ctx.createPattern(bgImage,"repeat-y");

		ctx.fillStyle = pattern;
		ctx.rect(translateX,0,bgImage.width,bgImage.height);
	  ctx.fill();

    ctx.translate(0,translateX);
	requestAnimationFrame(drawImage);
}
var lastRepaintTime = window.performance.now();
