class Player {
  constructor(options) {
    this.bullet = options.bullet;
    this.gameLoop = options.gameLoop;
    this.size = { x: 50, y: 50 };
    this.center = { x: this.gameLoop.center.x, y: this.gameLoop.center.y };
  }

  draw() {
    this.gameLoop.canvas.fillStyle = "#0000FF"
    this.gameLoop.context.fillRect(this.center.x - this.size.x / 2,
                              this.center.y - this.size.y / 2,
                              this.size.x,
                              this.size.y)
  }
};

module.exports = Player;
