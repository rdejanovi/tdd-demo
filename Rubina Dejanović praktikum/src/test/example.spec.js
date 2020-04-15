var assert = require('assert');
const fizzBuzz = require("../fizzBuzz");

describe('problem', function() {
    it('fizzBuzz', function () {
        fizzBuzz();
    });

    it("number/3 write Fizz", function() {
        let result = fizzBuzz(3);
        assert.equal(result,"Fizz")
    });

    it("number/5 write Buzz", function() {
        let result = fizzBuzz(5);
        assert.equal(result,"Buzz")
    });

    it("number/3 and /5 write FizzBuzz", function() {
        let result = fizzBuzz(15);
        assert.equal(result,"FizzBuzz")
    });

    it("else undefined", function() {
        let result = fizzBuzz(4);
        assert.strictEqual(result, undefined);
    });

});
