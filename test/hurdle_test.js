const chai = require('chai');
const assert = chai.assert;
const Hurdle = require('../lib/hundle');
const stub = require('./support/stub');

describe('Hundle', function(){
  context('default attributes', function(){
    it('has a game', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle();

      assert.equal(hurdle.game, game);
    });

    it('has a level default of 1', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle();

      assert.equal(hurdle.level, 1);
    });

    it('has a point value based on level', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle();

      assert.equal(hurdle.pointValue, 10);

      hurdle.level = 2

      assert.equal(hurdle.pointValue, 20);
    });

    it('has a size', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle();

      assert.equal(hurdle.size.x, 600);
      assert.equal(hurdle.size.y, 10);
    });

    it('has a center', function(){
      var canvas = stub();
      var context = stub().of("fillRect");

      var game = new Game({ canvas: canvas, context: context });

      let hurdle = new Hurdle();

      assert.equal(hurdle.center, 300);
      assert.equal(hurdle.center, -10);
    });
  });
});
