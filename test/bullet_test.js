const chai = require('chai');
const assert = chai.assert;

const stub = require('./support/stub');

const Bullet = require('../lib/bullet');
const Game = require('../lib/game');

describe('Bullet', function(){
  context('default attributes', function(){
    it('has a game', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.game, game);

    });

    it('has a size x', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.size.x, 20);
    });

    it('has a size y', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.size.y, 30);
    });

    it('has a center x', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.center.x, 590);

    });

    it('has a center y', function(){
      var canvas = stub();
      var context = stub().of("fillRect");
      canvas.width  = 800;
      canvas.height = 600;

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.center.x, 785);
    });

    it('has a speed', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.speed, 15);
    });

    it('has a class', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.class, 'bullet');
    });

    it('has an alive status default as true', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.alive, true);
    });
  });

  context('bullet functions', function(){
    it('has a function that changes alive to false', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let bullet = new Bullet(game);

      assert.equal(bullet.alive, true);

      bullet.clear();

      assert.equal(bullet.alive, false);
    });
  });
});
