var Player = require('./player');
var Enemy  = require('./enemy');
var Bullet = require('./bullet');

class Game {
  constructor(options) {
    this.canvas  = options.canvas;
    this.context = options.context;
    this.size    = { x: this.canvas.width, y: this.canvas.height };
    this.center  = { x: this.size.x / 2, y: this.size.y / 2 };
    this.player  = new Player(this);
    this.enemies = [];
    this.bullets = [];
    this.bodies  = [];
    this.offsetX = 0;
    this.offsetY = 0;
  }

  loop() {
    var self = this;
    requestAnimationFrame(function gameLoop() {
      self.bodies = self.enemies.concat(self.bullets).concat(self.player);
      self.update();
      self.draw(self.context);
      self.generateEnemy();
      self.shoot();
      self.clearEnemies();
      requestAnimationFrame(gameLoop);
    });
  }

  update() {
    this.checkCollisions();
    this.bodies.forEach((body) => {
      body.update();
    });
  }

  draw(context) {
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.offsetX = 0;
    this.offsetY = 0;
    for (var i = 0; i < this.bodies.length; i++) {
      this.drawBody(context, this.bodies[i]);
    }
  }

  drawBody(context, body) {
    body.draw();
  }

  generateEnemy() {
    if (Math.random() > 0.50) {
      var spawnAssignment = Math.random();
      if (spawnAssignment <= 0.33) {
        this.enemies.push(new Enemy(this, 'left'));
      } else if (spawnAssignment >= 0.66) {
        this.enemies.push(new Enemy(this, 'right'));
      } else {
        this.enemies.push(new Enemy(this, 'top'));
      }
    }
  }

  shoot() {
    this.bullets = this.bullets.filter((bullet) => {
      return bullet.alive === true;
    });

    if(this.bullets.length < 40) {
      this.bullets.push(new Bullet(this));
    }
  }

  addKeyListeners() {
    var self = this;
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 37) {
        self.offsetX += 6;
      } else if (e.keyCode === 39) {
        self.offsetX -= 6;
      } else if (e.keyCode === 38) {
        self.offsetY += 6;
        self.player.advancement += 6;
      } else if (e.keyCode === 40) {
        self.offsetY -= 6;
      }
    });
  }

  isColliding(body1, body2) {
    return !(
      body1.class === body2.class ||
      body1.center.x + body1.size.x / 2 <= body2.center.x - body2.size.x / 2 ||
      body1.center.y + body1.size.y / 2 <= body2.center.y - body2.size.y / 2 ||
      body1.center.x - body1.size.x / 2 >= body2.center.x + body2.size.x / 2 ||
      body1.center.y - body1.size.y / 2 >= body2.center.y + body2.size.y / 2
    );
  }

  checkCollisions() {
    var self = this;
    function notColliding(body1) {
      return self.bodies.filter((body2) => {
        return self.isColliding(body1, body2);
      }).length === 0;
    }
    self.enemies = self.enemies.filter(notColliding);
    self.bullets = self.bullets.filter(notColliding);
  }

  clearEnemies() {
    this.enemies = this.enemies.filter((enemy) => {
      return enemy.alive === true;
    });
  }
}




module.exports = Game;
