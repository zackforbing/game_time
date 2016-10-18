const imageRepository = require('./imageRepository');

class Bullet {
	constructor(game){
		this.game    = game;
		this.x = this.game.center.x;
		this.y = this.game.center.y;
		this.size = { x: 5, y: 5 };
		this.speed = 4;
		this.alive = true;
	}

	draw() {
		this.game.context.fillStyle = "#FF0001"
		this.game.context.fillRect(this.x,
															 this.y,
															 this.size.x,
															 this.size.y)
	}

	update() {
		if(-(this.y) === this.game.size.y) {
			this.clear();
		} else {
			this.y -= 25;
		}
	}

	clear() {
		this.alive = false;
	};
}

module.exports = Bullet;
