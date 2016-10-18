class Enemy {
  constructor(game, area) {
    this.area = area;
    this.game = game;
    this.size = { x: 30, y: 30 };
    this.speedY = 0.3;
    this.center = this.spawnPosition(area);
    this.class = 'enemy';
  }

  draw() {
    this.game.context.fillStyle = "#FF0000"
    this.game.context.fillRect(this.center.x,
                               this.center.y,
                               this.size.x,
                               this.size.y)
  }

  update() {
    if (this.area === 'top') {
      this.center.y += 2;
    }

    if (this.area === 'left') {
      this.center.x += 2;
    }

    if (this.area === 'right') {
      this.center.x -= 2;
    }
  }

  spawnPosition(area) {
    if (this.area === 'top') {
      return { x: Math.random() * 600 - this.game.offsetX, y: -30 - this.game.offsetY }

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
