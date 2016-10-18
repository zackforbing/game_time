const Bullet = require('./bullet');
const ImageRepository = require('./imageRepository');

function Pool(options) {
	this.size = options.maxSize; // Max bullets allowed in the pool
	this.pool = [];
	this.game = options.game;
	this.context = this.game.context;
	// this.imageRepository = new ImageRepository();

	/*
	 * Populates the pool array with the given object
	 */
	this.init = function(object) {
		if (object == "bullet") {
			for (var i = 0; i < this.size; i++) {
				// Initalize the object
				var bullet = new Bullet({ object: "bullet", game: this.game });
				// bullet.init(0,0, this.imageRepository.bullet.width, imageRepository.bullet.height);
				this.pool[i] = bullet;
			}
		}
		// else if (object == "enemy") {
		// 	for (var i = 0; i < size; i++) {
		// 		var enemy = new Enemy();
		// 		enemy.init(0,0, imageRepository.enemy.width, imageRepository.enemy.height);
		// 		pool[i] = enemy;
		// 	}
		// }
		// else if (object == "enemyBullet") {
		// 	for (var i = 0; i < size; i++) {
		// 		var bullet = new Bullet("enemyBullet");
		// 		bullet.init(0,0, imageRepository.enemyBullet.width, imageRepository.enemyBullet.height);
		// 		pool[i] = bullet;
		// 	}
		// }
	};

	/*
	 * Grabs the last item in the list and initializes it and
	 * pushes it to the front of the array.
	 */

	this.get = function(x, y, speed) {
		if(!this.pool[this.size - 1].alive) {
			this.pool[this.size - 1].spawn(x, y, speed);
			this.pool.unshift(this.pool.pop());
		}
	};

	/*
	 * Used for the ship to be able to get two bullets at once. If
	 * only the get() function is used twice, the ship is able to
	 * fire and only have 1 bullet spawn instead of 2.
	 */
	// this.getTwo = function(x1, y1, speed1, x2, y2, speed2) {
	// 	if(!pool[size - 1].alive && !pool[size - 2].alive) {
	// 		this.get(x1, y1, speed1);
	// 		this.get(x2, y2, speed2);
	// 	}
	// };

	/*
	 * Draws any in use Bullets. If a bullet goes off the screen,
	 * clears it and pushes it to the front of the array.
	 */
	this.animate = function() {
		for (var i = 0; i < this.size; i++) {
			// Only draw until we find a bullet that is not alive
			if (this.pool[i].alive) {
				if (this.pool[i].draw()) {
					this.pool[i].clear();
					this.pool.push((this.pool.splice(i,1))[0]);
				}
			}
			else
				break;
		}
	};
}

module.exports = Pool;
