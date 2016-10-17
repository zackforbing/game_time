const chai = require('chai');
const assert = chai.assert;

const ImageRepository = require('../lib/imageRepository')

describe('Image Repository', function(){
  context('default attributes', function (){
    it('has a default image tags', function(){
      let imageRepository = new ImageRepository();
      let image = new Image();

      assert.equal(imageRepository.background, image);
      assert.equal(imageRepository.bullet, image);
      assert.equal(imageRepository.enemy, image);
    });

    it('has image tags with image sources', function(){
      let imageRepository = new ImageRepository();

      assert.equal(imageRepository.background.src, 'images/bg.png');
      assert.equal(imageRepository.bullet.src, 'images/bullet.png');
      assert.equal(imageRepository.enemy.src, 'images/enemy.png');
    });
  });
});
