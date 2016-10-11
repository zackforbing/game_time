var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Background {
  constructor() {
  this.height = 300;
  this.width = 300;
  }


  get requestAnimationFrame(function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.
        context.fillRect(x, y++, width, height);
        requestAnimationFrame(gameLoop);
      });
};
