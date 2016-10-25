const chai   = require('chai');
const assert = chai.assert;
const Player = require('../lib/player');
const stub   = require('./support/stub');
const Game   = require('../lib/game');

describe('Player', function() {
  context('with default attributes', function() {

    it('has a game', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});

      let player = new Player(game);

      assert.equal(player.game, game);
    });

    it('should have a size', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.size.x, 50);
      assert.equal(player.size.y, 50);
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

      assert.equal(player.center.y, 500);
    });

    it('should have a class of player', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.class, 'player');
    });

    it('defaults alive as true', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.alive, true);
    });

    it('has an advancement default of 0', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.advancement, 0);
    });

    it('has a hitbox', function() {
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      let player = new Player(game);

      assert.equal(player.hitbox.x, 40);
      assert.equal(player.hitbox.x, 40);
    });
  });
});
