const chai     = require('chai');
const assert   = chai.assert;
const Game     = require('../lib/game')
const stub     = require('./support/stub')

describe('GameLoop', function() {
  context('with default attributes', function() {
    var canvas = stub();
    var context = stub().of("fillRect");

    var game = new Game({ canvas: canvas, context: context });

    it.skip('has a canvas', function(){
      assert.equal(game.canvas);
    });

    it.skip('has a context', function(){
      assert.equal(game.context);
    });

    it.skip('has a size', function(){
      assert.equal(game.size);
    });

    it.skip('has a center', function(){
      assert.equal(game.center);
    });
  });
});
