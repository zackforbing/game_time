class Enemy {
  constructor(options) {
    this.bullet = options.bullet;
    this.gameLoop = options.gameLoop;
    this.size = { x: 30, y: 30 };
  }

  draw() {
    this.gameLoop.canvas.fillStyle = "#0000FF"
    this.gameLoop.context.fillRect((Math.random() * 600) - this.size.x,
                                   30,
                                   this.size.x,
                                   this.size.y)
  }

  update() {

  }
};

module.exports = Enemy;
