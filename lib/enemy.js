class Enemy {
  constructor(game) {
    this.game = game;
    this.size = { x: 30, y: 30 };
    this.speedY = 0.3;
    this.location = { x: Math.random() * 600 - this.size.x, y: -30 }
  }

  draw() {
    this.game.context.fillStyle = "#FF0000"
    this.game.context.fillRect(this.location.x,
                               this.location.y,
                               this.size.x,
                               this.size.y)
  }

  update() {
    this.location.y += 2;
  }
};

module.exports = Enemy;
