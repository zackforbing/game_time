const chai     = require('chai');
const assert   = chai.assert;
const stub     = require('./support/stub');

const Game     = require('../lib/game');
const Player   = require('../lib/player');
const Hurdle   = require('../lib/hurdle');

const ImageRepository = require('../lib/imageRepository');

describe('GameLoop', function() {
  context('with default attributes', function() {

    it('has a canvas', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.canvas, canvas);
    });

    it('has a context', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.context, context);
    });

    it('has a size', function(){
      var canvas = stub();
          canvas.width  = 600;
          canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.size.x, 600);
      assert.equal(game.size.y, 800);
    });

    it('has a center', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });
      assert.equal(game.center.x, 300);
      assert.equal(game.center.y, 400);
    });

    it('has a player', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });
      assert.instanceOf(game.player, Player);
    });

    it.skip('has enemies', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.enemies, []);
    });

    it.skip('has bullets', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.bullets, []);
    });

    it.skip('has bodies', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.bullets, []);
    });

    it('has an offsetX default of 0', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.offsetX, 0);
    });

    it('has an offsetY default of 0', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.offsetY, 0);
    });

    it('has an speed default of 10', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.speed, 10);
    });

    it('has an difficulty default of 10', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.difficulty, 0.95);
    });

    it('has a fire rate default of 150', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.fireRate, 150);
    });

    it('has a starting score of 0', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.score, 0);
    });

    it.skip('has a game loop', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.equal(game.gameLoop, 0);
    });

    it.skip('has a hurdle', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });
      assert.instanceOf(game.hurdle, Hurdle);
    });

    it('has an image repository', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      assert.instanceOf(game.imageRepository, ImageRepository);
    });
  });
});
