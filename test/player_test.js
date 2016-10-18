const chai   = require('chai');
const assert = chai.assert;
const Player = require('../lib/player');
const stub   = require('./support/stub');
const Game   = require('../lib/game')

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
    })

    it('should have an x-coordinate', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.center.x, 400);
    })

    it('should have an y-coordinate', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.center.y, 300);
    })

    it('should have a height', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.size.x, 50);
    })

    it('should have a width', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.size.y, 50);
    })
  });

  context('it can move', function() {
    it.skip('should be able to move left', function() {
      let player = new Player;

      assert.equal(player.x, 0);
      player.move('left');
      assert.equal(player.x, -1);
    })

    it.skip('should be able to move right', function() {
      assert.equal(player.x, 0);
      player.move(right);
      assert.equal(player.x, 1);
    })

    it.skip('should be able to move up', function() {
      assert.equal(player.y, 0);
      player.move(up);
      assert.equal(player.y, -1);
    })

    it.skip('should be able to move down', function() {
      assert.equal(player.y, 0);
      player.move(down);
      assert.equal(player.y, 1);
    })
  });
});
