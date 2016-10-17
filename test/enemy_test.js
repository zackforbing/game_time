const chai     = require('chai');
const assert   = chai.assert;
const Enemy    = require('../lib/enemy')
const Bullet   = require('../lib/bullet')
const Game     = require('../lib/game')

describe('Enemy', function() {
  context('with default attributes', function() {
    // var game     = new Game();
    // var bullet   = new Bullet()
    // var enemy    = new Enemy( {bullet: bullet, game: game} );

    it('has a bullet', function(){
      assert.equal(enemy.bullet, bullet);
    });

    it('has a gameloop', function(){
      assert.equal(enemy.game, game);
    });

    it('has a default size', function(){
      // assert.equal(enemy.size, { x: 30 y: 30 });
      assert.equal(enemy.size.x, 30);
      assert.equal(enemy.size.y, 30);
    });
  });
});
