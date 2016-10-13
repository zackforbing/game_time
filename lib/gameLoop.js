var Player = require('./player')

class GameLoop {
  constructor() {
    var canvas = document.getElementById('game')
    var context = canvas.getContext('2d');
    this.size = { x: canvas.width, y: canvas.height };
    this.center = { x: this.size.x / 2, y: this.size.y / 2 };
    this.bodies = [new Player(this)];

    var self = this;
    function loop() {
      self.update();
      self.draw(context);
      requestAnimationFrame(loop);
    }
  }
}

module.exports = GameLoop;
