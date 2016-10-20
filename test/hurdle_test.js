const chai = require('chai');
const assert = chai.assert;
const Hurdle = require('../lib/hurdle');
const stub = require('./support/stub');
const Game = require('../lib/game');

describe('Hurdle', function(){
  context('default attributes', function(){
    it('has a game', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle(game);

      assert.equal(hurdle.game, game);
    });

    it('has a level default of 1', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle(game);

      assert.equal(hurdle.level, 1);
    });

    it('has a size', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");


      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle(game);

      assert.equal(hurdle.size.x, 600);
      assert.equal(hurdle.size.y, 10);
    });

    it('has a center', function(){
      var canvas = stub();
      canvas.width  = 600;
      canvas.height = 800;

      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle(game);

      assert.equal(hurdle.center.x, 300);
      assert.equal(hurdle.center.y, -10);
    });
  });
});
