var offsetX = 0;
var offsetY = 0;

class Background {
  constructor(canvas, game) {
    this.canvas = canvas;
    this.context = canvas.context;
    this.height = 1800;
    this.width = 1800;
    this.src = '/image_tag.jpg';
    this.bodies = game.bodies;
  }

  draw(context) {
    context.save();
    context.translate(offsetX, offsetY);
    context.clearRect(-offsetX, -offsetY, 1800, 1800);
    context.restore();
  }


};
