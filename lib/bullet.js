const imageRepository = require('./imageRepository');

class Bullet {
	constructor(options){
		this.object  = options.object;
		this.alive   = false;
		this.game    = options.game;
		this.context = this.game.context;
	}

	spawn(x, y, speed) {
		this.x = x || this.game.center.x;
		this.y = y || this.game.center.y;
		this.size = { x: 5, y: 5 };
		this.speed = speed || 20;
		this.alive = true;
	}

	draw() {
		spawn();
		this.game.context.fillStyle = "#FF0000"
		this.game.context.fillRect(this.x,
															 this.y,
															 this.size.x,
															 this.size.y)
	}

	update() {
		this.y -= 2;
	}

	clear() {
		this.x = 0;
		this.y = 0;
		this.speed = 0;
		this.alive = false;
	};
}

module.exports = Bullet;
