var Player = require('./player');
var Enemy  = require('./enemy');
var Bullet = require('./bullet');

class Game {
  constructor(options) {
    this.canvas  = options.canvas;
    this.context = options.context;
    this.size    = { x: this.canvas.width, y: this.canvas.height };
    this.center  = { x: this.size.x / 2, y: this.size.y / 2 };
    this.bodies  = [new Player(this)];
  }

  loop() {
    var self = this;
    requestAnimationFrame(function gameLoop() {
      self.update();
      self.draw(self.context);
      self.generateEnemy();
      self.shoot();
      requestAnimationFrame(gameLoop);
    })
  }

  update() {
    for (var i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
    }
  }

  draw(context) {
    context.clearRect(0, 0, this.size.x, this.size.y);
    for (var i = 0; i < this.bodies.length; i++) {

      this.drawBody(context, this.bodies[i]);
    }

  }
  drawBody(context, body) {
    body.draw();
  }

  generateEnemy(position) {
    if (Math.random() > 0.95) {
      var spawnAssignment = Math.random();
      if (spawnAssignment <= 0.33) {
        this.bodies.push(new Enemy(this, 'left'));
      } else if (spawnAssignment >= 0.66) {
        this.bodies.push(new Enemy(this, 'right'));
      } else {
        this.bodies.push(new Enemy(this, 'top'));
      }
    }
  }

  shoot(){
    let bulletCount = this.bodies.filter(function(object) {
      if(object.alive === true) {
        return true;
      } else {
        return false;
      }
    });

    if(bulletCount.length < 40) {
      this.bodies.push(new Bullet(this));
    };
  }
}

module.exports = Game;
