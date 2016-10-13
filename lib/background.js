class Background {
  constructor(options) {
    this.height = 300;
    this.width = 300;
    this.velocity = 100;
    this.bgImage = new Image();
    this.context = options.context;
    this.canvas = options.canvas;
    this.lastRepaintTime = window.performance.now();

  }

  requestAnimationFrame() {
    requestAnimationFrame(gameLoop);
  }

  gameLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas.
    requestAnimationFrame(gameLoop);
  }

  drawImage(time) {
    let framegap = time - this.lastRepaintTime;
    this.lastRepaintTime = time;

    let translateX = this.velocity * (framegap/1000);
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    let pattern = this.context.createPattern(this.bgImage,"repeat-y");

    this.context.fillStyle = pattern;
    this.context.rect(translateX,0,this.bgImage.width,this.bgImage.height);
    this.context.fill();
    this.context.translate(0,translateX);

    debugger;
    requestAnimationFrame(drawImage);
  }

  loadImage() {
      // this.bgImage.addEventListener('load', drawImage, false);
      this.bgImage.src = "https://files.slack.com/files-pri/T029P2S9M-F2NM89LUS/n8dawg.jpg";
      this.bgImage.height = 1800;
      this.bgImage.width = 1800;
  }


};

module.exports = Background;


// function gameLoop() {
//   context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas.
//   context.fillRect(x, y++, width, height);
//   requestAnimationFrame(gameLoop);
// }




// requestAnimationFrame(function gameLoop() {
  // context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.
  // requestAnimationFrame(gameLoop);
// });

// var lastRepaintTime = window.performance.now();
