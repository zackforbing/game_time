const imageRepository = require('./imageRepository');

class Bullet {
	constructor(game){
		this.game    = game;
		this.center = { x: this.game.center.x, y: this.game.center.y + (this.game.center.y / 3) - 35 };
		this.size = { x: 10, y: 20 };
		this.speed = 4;
		this.alive = true;
		this.class = 'bullet';
	}

	draw() {
		this.game.context.fillStyle = "#FF0001"
		this.game.context.fillRect(this.center.x,
															 this.center.y,
															 this.size.x,
															 this.size.y)
	}

	update() {
		if(-(this.center.y) > this.game.size.y) {
			this.clear();
		} else {
			this.center.y -= 25;
		}
	}

	clear() {
		this.alive = false;
	};
}

module.exports = Bullet;
