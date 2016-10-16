class GameLoop {
  constructor() {
    this.canvas = document.getElementById('game')
    this.context = this.canvas.getContext('2d');
    this.size = { x: this.canvas.width, y: this.canvas.height };
    this.center = { x: this.size.x / 2, y: this.size.y / 2 };

    var self = this;
    function loop() {
      self.update();
      self.draw(context);
      requestAnimationFrame(loop);
    }
  }
}

module.exports = GameLoop;
