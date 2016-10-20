const chai = require('chai');
const assert = chai.assert;
const Hurdle = require('../lib/hundle');
const stub = require('./support/stub');

describe('Hundle', function(){
  context('default attributes', function(){
    it('has a game', function(){
      let stub = stub();
      let context = stub().of('fillReact');

      let Game = new Game();
      let hurdle = new Hurdle();
    });

    it('has a level', function(){
      
    })
  });
});
