const chai     = require('chai');
const assert   = chai.assert;
const Enemy    = require('../lib/enemy');
const Bullet   = require('../lib/bullet');
const Game     = require('../lib/game');
const stub     = require('./support/stub');

describe('Enemy', function() {
  context('with default attributes', function() {

    it('has an area', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      var enemy = new Enemy(game, 'left');

      assert.equal(enemy.area, 'left');
    });

    it('has a game', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      var enemy = new Enemy(game, 'left');

      assert.equal(enemy.game, game);
    });

    it('has a size', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      var enemy = new Enemy(game, 'left');

      assert.equal(enemy.size.x, 30);
      assert.equal(enemy.size.y, 30);
    });

    it('has a speed of 2', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      var enemy = new Enemy(game, 'left');

      assert.equal(enemy.speed, 0.3);
    });

    it('has a center', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      var enemy = new Enemy(game, 'left');

      assert.equal(enemy.location.x, 500);
    });

    it('has a class of enemy', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      var enemy = new Enemy(game, 'left');

      assert.equal(enemy.location.x, 500);
    });

    it('has a default of alive', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      var enemy = new Enemy(game, 'left');

      assert.equal(enemy.alive, true);
    });
  });

  context('enemy functions', function(){
    it('has a clear function which sets alive to false', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({canvas: canvas, context: context});
      var enemy = new Enemy(game, 'left');

      assert(enemy.alive, true);

      enemy.clear();

      assert.equal(enemy.alive, false);
    })
  })
});
