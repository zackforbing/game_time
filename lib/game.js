var $      = require('jquery');
var Player = require('./player');
var Enemy  = require('./enemy');
var Bullet = require('./bullet');
var Hurdle = require('./hurdle');
var ImageRepository = require('./imageRepository');

class Game {
  constructor(options) {
  this.canvas          = options.canvas;
  this.context         = options.context;
  this.size            = { x: this.canvas.width, y: this.canvas.height };
  this.center          = { x: this.size.x / 2, y: this.size.y / 2 };
  this.player          = new Player(this);
  this.enemies         = [];
  this.bullets         = [];
  this.bodies          = [];
  this.offsetX         = 0;
  this.offsetY         = 0;
  this.speed           = 10;
  this.difficulty      = 0.95;
  this.fireRate        = 150;
  this.score           = 0;
  this.gameLoop        = this.gameLoop.bind(this);
  this.hurdle          = new Hurdle(this);
  this.imageRepository = new ImageRepository();
  this.over = false;
  }


  loop() {
    this.shoot();
    requestAnimationFrame(this.gameLoop);
  }

  gameLoop() {
    if(this.over === false) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.bodies = this.enemies.concat(this.bullets).concat(this.player);
      this.update();
      this.generateEnemy();
      this.clearOffscreenEnemies();
      this.hurdle.isHurdleInSight();
      this.hurdle.isHurdleReached();
      this.draw(this.context);
      this.offsetX = 0;
      this.offsetY = 0;
      this.isPlayerDestroyed();
      if(this.over === false) {
        requestAnimationFrame(this.gameLoop);
      } else {
        this.gameOver();
      }
    }
  }

  update() {
    this.checkCollisions();
    for (var i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
    }
  }

  draw(context) {
    for (var i = 0; i < this.bodies.length; i++) {
      this.drawBody(context, this.bodies[i]);
    }
  }

  drawBody(context, body) {
    body.draw();
  }

  drawBg() {
    this.context.drawImage(this.imageRepository.bg,
                           0,
                           0,
                           this.size.x,
                           this.size.y);
  }

  generateEnemy() {
    if (Math.random() > this.difficulty) {
      var spawnAssignment = Math.random();
      if (spawnAssignment <= 0.20) {
        this.enemies.push(new Enemy(this, 'left'));
      } else if (spawnAssignment >= 0.80) {
        this.enemies.push(new Enemy(this, 'right'));
      } else {
        this.enemies.push(new Enemy(this, 'top'));
      }
    }
  }

  shoot() {
    var self = this;
    this.bullets = this.bullets.filter((bullet) => {
      return bullet.alive === true;
    });

    setTimeout(() => {
      this.bullets.push(new Bullet(this));
      self.shoot();
    }, this.fireRate);
  }

  addKeyListeners() {
    window.addEventListener('keydown', e => {
      e.preventDefault();
      if (e.keyCode === 37) {
        this.offsetX += this.speed;
      }
      if (e.keyCode === 39) {
        this.offsetX -= this.speed;
      }
      if (e.keyCode === 38) {
        this.offsetY += this.speed;
        this.player.advancement += this.speed;
      }
      if (e.keyCode === 40) {
        this.offsetY -= this.speed;
        this.player.advancement -= (this.speed);
      }
    });
  }

  isColliding(body1, body2) {
    if (body1.class === 'enemy' &&
        body2.class === 'player') {
      return !(
        body1.center.x + body1.size.x / 2 <= body2.center.x - body2.hitbox.x / 2 ||
        body1.center.y + body1.size.y / 2 <= body2.center.y - body2.hitbox.y / 2 ||
        body1.center.x - body1.size.x / 2 >= body2.center.x + body2.hitbox.x / 2 ||
        body1.center.y - body1.size.y / 2 >= body2.center.y + body2.hitbox.y / 2
      );
    } else {
      return !(
        body1.class === body2.class ||
        body1.center.x + body1.size.x / 2 <= body2.center.x - body2.size.x / 2 ||
        body1.center.y + body1.size.y / 2 <= body2.center.y - body2.size.y / 2 ||
        body1.center.x - body1.size.x / 2 >= body2.center.x + body2.size.x / 2 ||
        body1.center.y - body1.size.y / 2 >= body2.center.y + body2.size.y / 2
      );
    }
  }

  checkCollisions() {
    var self = this;

    function notColliding(body1) {
      return self.bodies.filter((body2) => {
        return self.isColliding(body1, body2);
      }).length === 0;
    }

    if(self.bullets.length !==  self.bullets.filter(notColliding).length ) {
      ++this.score;
      self.increaseScore();
    }

    self.enemies = self.enemies.filter(notColliding);
    self.bullets = self.bullets.filter(notColliding);
    self.bodies = self.bodies.filter(notColliding);
 }

 isPlayerDestroyed() {
   if (this.bodies.includes(this.player) === false) {
     this.over = true;
   }

 }

  clearOffscreenEnemies() {
    this.enemies = this.enemies.filter((enemy) => {
      return enemy.alive === true;
    });
  }

  increaseScore(){
    let score = document.getElementById("score-text");
    score.innerHTML = this.score;
  }

  gameOver() {
    $("#game").hide();
    $("#game-end").show();
    this.highScores();

  }

  highScores() {
    let localScores = JSON.parse(localStorage.getItem('TimeFreezeScores'));
    var score = JSON.parse($("#score-text").text());

    if(localScores === null) {
      localScores = [];
    } else if (localScores.length > 0 ) {
      localScores.push(score);
      localScores = localScores.sort(function compare(a, b){
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }).reverse().slice(0,5);
    }

    localStorage.setItem('TimeFreezeScores', JSON.stringify(localScores));
    $('#high-scores').text("");
    for(var i = 0; i < localScores.length; i++) {

      $('#high-scores').append(`<li>${i + 1}. ${localScores[i]}</li>`);
    }
  }
}

module.exports = Game;
