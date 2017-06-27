const assert = require('assert');

//Description of the test
describe('demo of passed test', function() {

  //Test #01 - passed test
  it('adds two numbers', function(){
    assert(2 + 2 === 4);
  });

});

//Description of the test
describe('demo of a failed test', function() {

  //Test #02 - failed test
  it('adds two numbers', function(){
    assert(2 + 3 === 4);
  });

});

//to run it, type "npm run test". Notice "test" line and mocha dependency in package.json
