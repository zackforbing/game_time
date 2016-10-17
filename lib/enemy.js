class Enemy {
  constructor(game, area) {
    this.area = area;
    this.game = game;
    this.size = { x: 30, y: 30 };
    this.speedY = 0.3;
    this.location = this.spawnPosition(area);
  }

  draw() {
    this.game.context.fillStyle = "#FF0000"
    this.game.context.fillRect(this.location.x,
                               this.location.y,
                               this.size.x,
                               this.size.y)
  }

  update() {
    if (this.area === 'top') {
      this.location.y += 2;
    }

    if (this.area === 'left') {
      this.location.x += 2;
    }

    if (this.area === 'right') {
      this.location.x -= 2;
    }
  }

  spawnPosition(area) {
    if (this.area === 'top') {
      return { x: Math.random() * 600, y: -30 }
    }

    if (this.area === 'left') {
      return { x: -30, y: Math.random() * 300 }
    }

    if (this.area === 'right') {
      return { x: this.game.canvas.width + this.size.x, y: Math.random() * 300 }
    }
  }
};

module.exports = Enemy;
