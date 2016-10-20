const chai     = require('chai');
const assert   = chai.assert;
const Game     = require('../lib/game');
const stub     = require('./support/stub');

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
  });
});
