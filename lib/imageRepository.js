class imageRepository {
  constructor(){
  this.background = new Image();
  this.bullet     = new Image();
  this.enemy      = new Image();
  this.player      = new Image();

  this.background.src = "images/bg.png";
  this.bullet.src     = "images/bullet.png";
  this.enemy.src      = "images/enemy.png";
  this.player.src     = "images/player.png";
  }
}

module.exports = imageRepository;
