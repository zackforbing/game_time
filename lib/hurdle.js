class Hurdle {
  constructor(game) {
    this.game       = game;
    this.level      = 1;
    this.pointValue = this.level * 10;
    this.size       = { x: this.game.canvas.width, y: 10 };
    this.center     = { x: this.game.center.x, y: -this.size.y };
  }

  isHurdleInSight() {
    if (this.game.player.advancement >= 1000) {
      this.draw();
      this.update();
    }
  }

  isHurdleReached() {
    if (this.game.player.advancement >= 1500) {
      this.game.player.advancement = 0;
      this.game.difficulty -= 0.02;
      this.level += 1;
      this.center.y = -this.size.y;
      this.game.score += this.pointValue;
      this.game.increaseScore();
    }
  }

  draw() {
    this.game.context.fillStyle = "white";
    this.game.context.fillRect(0,
                          this.center.y,
                          this.size.x,
                          this.size.y);
  }

  update() {
    this.center.y += this.game.offsetY;
  }
}

module.exports = Hurdle;
