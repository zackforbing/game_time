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
    this.offsetX = 0;
    this.offsetY = 0;
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
    this.bodies.forEach(function(body){
      body.update();
    });
  }

  draw(context) {
    context.translate(this.offsetX, this.offsetY);
    this.bodies.push(new Player(this))
    context.save();
    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.offsetX = 0;
    this.offsetY = 0;
    context.restore();
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

<<<<<<< HEAD
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
=======
  addKeyListeners() {
    var self = this;
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === 37) {;
        self.offsetX += 6;
      } else if (e.keyCode === 39) {
        self.offsetX -= 6;
      } else if (e.keyCode === 38) {
        self.offsetY += 6;
      } else if (e.keyCode === 40) {
        self.offsetY -= 6;
      }
    })
>>>>>>> origin/master
  }
}


module.exports = Game;
