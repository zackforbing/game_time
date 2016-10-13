class Player {
  constructor(gameLoop){
    this.gameLoop = gameLoop;
    this.size = { x: 50, y: 50 };
    this.center = { x: gameLoop.center.x, y: gameLoop.center.y };
  }
  draw(canvas) {
    canvas.fillStyle = "#0000FF"
    canvas.fillRect(this.center.x - body.size.x / 2,
                              this.center.y - body.size.y / 2,
                              this.size.x,
                              this.size.y)
  }
};

module.exports = Player;
