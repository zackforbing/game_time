const chai   = require('chai');
const assert = chai.assert;
const Player = require('../lib/player');
const stub   = require('./support/stub');
const Game   = require('../lib/game');

describe('Player', function() {
  context('with default attributes', function() {

    it('should be instantiated', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});

      let player = new Player(game);

      assert.instanceOf(player, Player);
    });

    it('should have an x-coordinate', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.center.x, 400);
    });

    it('should have an y-coordinate', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.center.y, 400);
    });

    it('should have a height', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.size.x, 50);
    });

    it('should have a width', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.size.y, 50);
    });
  });
});
