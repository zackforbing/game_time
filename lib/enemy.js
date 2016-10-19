class Enemy {
  constructor(game, area) {
    this.area = area;
    this.game = game;
    this.size = { x: 30, y: 30 };
    this.speedY = 0.3;
    this.center = this.spawnPosition();
    this.class = 'enemy';
    this.alive = true;
  }

  draw() {
    this.game.context.fillStyle = "#FF0000";
    this.game.context.fillRect(this.center.x,
                               this.center.y,
                               this.size.x,
                               this.size.y);
  }

  update() {
    if (this.area === 'top') {
      this.center.x += this.game.offsetX;
      this.center.y += (3 + this.game.offsetY);
      if(this.center.y > this.game.size.y + 200) {
  			this.clear();
      }
    }

    if (this.area === 'left') {
      this.center.x += (3 + this.game.offsetX);
      this.center.y += this.game.offsetY;
      if(this.center.x > this.game.size.x + 200) {
        this.clear();
      }
    }

    if (this.area === 'right') {
      this.center.x += (this.game.offsetX - 3);
      this.center.y += this.game.offsetY;
      if(this.center.x < -200) {
        this.clear();
      }
    }
  }

	clear() {
		this.alive = false;
	}

  spawnPosition() {
    if (this.area === 'top') {
      return { x: Math.random() * 600 - this.game.offsetX, y: -30 - this.game.offsetY };

    }

    if (this.area === 'left') {
      return { x: -30, y: Math.random() * 300 };
    }

    if (this.area === 'right') {
      return { x: this.game.canvas.width + this.size.x, y: Math.random() * 300 };
    }
  }
}

module.exports = Enemy;
