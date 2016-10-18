const chai       = require('chai');
const assert     = chai.assert;
const Background = require('../lib/background');

describe('Background', function() {
  context('with default attributes', function() {
    var background = new Background();

    it('has a width and height', function(){
      assert.equal(background.width, 1800);
      assert.equal(background.height, 1800);
    });
  });
});
