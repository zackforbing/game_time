class Player {
  constructor(game) {
    // this.bullet = options.bullet;
    this.game = game;
    this.size = { x: 50, y: 50 };
    this.center = { x: this.game.center.x, y: this.game.center.y };
  }

  draw() {
    this.game.context.fillStyle = "blue"
    this.game.context.fillRect(this.center.x - this.size.x / 2,
                          this.center.y - this.size.y / 2,
                          this.size.x,
                          this.size.y)
  }

  update() {

  }
};

module.exports = Player;
