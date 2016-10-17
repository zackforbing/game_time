const chai   = require('chai');
const assert = chai.assert;
const Player = require('../lib/player')

describe('Player', function() {
  context('with default attributes', function() {

    it('should be instantiated', function() {
      let player = new Player;

      assert.isObject(player);
    })

    it('should have an x-coordinate', function() {
      let player = new Player;

      assert.equal(player.x, 0);
    })

    it('should have an y-coordinate', function() {
      let player = new Player;

      assert.equal(player.y, 0);
    })

    it('should have a height', function() {
      let player = new Player;

      assert.equal(player.height, 50);
    })

    it.skip('should have a width', function() {
      let player = new Player;

      assert.equal(player.width, 50);
    })
  });

  context('it can move', function() {
    it('should be able to move left', function() {
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
