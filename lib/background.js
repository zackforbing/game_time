var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Background {
  constructor() {
  this.height = 1800;
  this.width = 1800;
  }


  requestAnimationFrame(gameLoop) {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.
        context.fillRect(x, y++, width, height);
        requestAnimationFrame(gameLoop);
      };
};
