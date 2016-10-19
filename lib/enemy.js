class Enemy {
  constructor(game, area) {
    this.area = area;
    this.game = game;
    this.size = { x: 30, y: 30 };
    this.speed = 2;
    this.center = this.spawnPosition();
    this.class = 'enemy';
    this.alive = true;
  }

  draw() {
    this.game.context.fillStyle = "red";
    this.game.context.fillRect(this.center.x,
                               this.center.y,
                               this.size.x,
                               this.size.y);
  }

  update() {
    if (this.area === 'top') {
      this.center.x += this.game.offsetX;
      this.center.y += (this.speed + this.game.offsetY);
      if(this.center.y > this.game.size.y + 200) {
  			this.clear();
      }
    }

    if (this.area === 'left') {
      this.center.x += (this.speed + this.game.offsetX);
      this.center.y += this.game.offsetY;
      if(this.center.x > this.game.size.x + 200) {
        this.clear();
      }
    }

    if (this.area === 'right') {
      this.center.x += (this.game.offsetX - this.speed);
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
      return { x: Math.random() * 600, y: -30 };

    }

    if (this.area === 'left') {
      return { x: -30, y: Math.random() * 600 };
    }

    if (this.area === 'right') {
      return { x: this.game.canvas.width + this.size.x, y: Math.random() * 600 };
    }
  }
}

module.exports = Enemy;
