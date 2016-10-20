const chai = require('chai');
const assert = chai.assert;

const ImageRepository = require('../lib/imageRepository');

describe('Image Repository', function(){
  context('default attributes', function (){
    it('has image tags with image sources', function(){
      let imageRepository = new ImageRepository();

      assert.equal(imageRepository.background.src, 'http://localhost:8080/images/bg.png');
      assert.equal(imageRepository.bullet.src, 'http://localhost:8080/images/bullet.png');
      assert.equal(imageRepository.enemy.src, 'http://localhost:8080/images/enemy.png');
      assert.equal(imageRepository.player.src, 'http://localhost:8080/images/player.png');
    });
  });
});
