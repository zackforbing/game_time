// require('./background')
// require('./player')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var x = 50;
var y = 50;
var width = 10;
var height = 10;

context.fillRect(50, 50, 10, 10);


requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.

  context.fillRect(x, y++, width, height);
  requestAnimationFrame(gameLoop);
});
