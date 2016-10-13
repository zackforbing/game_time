class Bullet {
  constructor() {
    this.collection = [];
  }

  draw() {
    for(i = 0; i < this.collection.length; i++) {
      this.collection[i].draw();
    };
  };

  update() {
    if(this.collection.length > 0) {
      for (i = 0; i < this.collection.length; i++) {
        this.collection[i].update();
      };
    };
  };
}

module.exports = Bullet;




shoot: function() {
    var bullet = new Bullet(this.position.x, this.position.y - this.bounds.h / 2, 1, 1000);
    this.bullets.push(bullet);
  },


  updateBullets: function(dt) {
    for (var i = this.bullets.length - 1; i >= 0; i--) {
      var bullet = this.bullets[i];
      if (bullet.alive) {
        bullet.update(dt);
      } else {
        this.bullets.splice(i, 1);
        bullet = null;
      }
    }
  },

  update: function(dt) {
    // update time passed between shots
    this.bulletDelayAccumulator += dt;

    // apply x vel
    this.position.x += this.xVel * dt;

    // cap player position in screen bounds
    this.position.x = clamp(this.position.x, this.bounds.w/2, CANVAS_WIDTH - this.bounds.w/2);
    this.updateBullets(dt);
  },

  draw: function(resized) {
    this._super(resized);

    // draw bullets
    for (var i = 0, len = this.bullets.length; i < len; i++) {
      var bullet = this.bullets[i];
      if (bullet.alive) {
        bullet.draw(resized);
      }
    }
  }
});

var Bullet = BaseSprite.extend({
  init: function(x, y, direction, speed) {
    this._super(bulletImg, x, y);
    this.direction = direction;
    this.speed = speed;
    this.alive = true;
  },

  update: function(dt) {
    this.position.y -= (this.speed * this.direction) * dt;

    if (this.position.y < 0) {
      this.alive = false;
    }
  },

  draw: function(resized) {
    this._super(resized);
  }
});
