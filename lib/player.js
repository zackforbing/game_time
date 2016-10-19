class Player {
  constructor(game) {
    this.game = game;
    this.size = { x: 50, y: 50 };
    this.center = { x: this.game.center.x, y: 500 };
    this.class = 'player';
    this.alive = true;
    this.advancement = 0;
  }

  draw() {
    this.game.context.fillStyle = "blue";
    this.game.context.fillRect(this.center.x - this.size.x / 2,
                          this.center.y - this.size.y / 2,
                          this.size.x,
                          this.size.y);
  }

  update() {
    this.game.context.fillStyle = "blue";
    this.game.context.fillRect(this.center.x - this.size.x / 2,
                          this.center.y - this.size.y / 2,
                          this.size.x,
                          this.size.y);
  }
}

module.exports = Player;
