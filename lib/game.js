var Player = require('./player')
var Enemy  = require('./enemy')

class Game {
  constructor(options) {
    this.canvas  = options.canvas;
    this.context = options.context;
    // this.canvas = document.getElementById('game')
    // this.context = this.canvas.getContext('2d');
    this.size = { x: this.canvas.width, y: this.canvas.height };
    this.center = { x: this.size.x / 2, y: this.size.y / 2 };
    this.bodies = [new Player(this)];
  }

  loop() {
    var self = this;
    requestAnimationFrame(function gameLoop() {
      self.update();
      self.draw(self.context);
      self.generateEnemy();
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
    let now = Date.now();
    return new Promise(function(resolve, reject) {
      if(resolve){
        
      }
    })

    while( now - Date.now(); === 50 ) {
      Bullet.spawn();
    }
  }
}

module.exports = Game;
