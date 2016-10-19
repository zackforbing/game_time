// const imageRepository = require('./imageRepository');

class Bullet {
	constructor(game) {
		this.game    = game;
		this.size 	 = { x: 20, y: 30 };
		this.center	 = { x: this.game.center.x - (this.size.x / 2), y: 470 };
		this.speed 	 = 15;
		this.class 	 = 'bullet';
		this.alive 	 = true;
		this.class 	 = 'bullet';
	}

	draw() {
		this.game.context.fillStyle = "gold";
		this.game.context.fillRect(this.center.x,
															 this.center.y,
															 this.size.x,
															 this.size.y);
	}

	update() {
		if(-(this.center.y) > this.game.size.y) {
			this.clear();
		} else {
			this.center.y -= (this.speed + this.game.offsetY);
			this.center.x += this.game.offsetX;
		}
	}

	clear() {
		this.alive = false;
	}
}

module.exports = Bullet;
