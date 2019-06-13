var expect = require('chai').expect

describe('random testing', function() {
    it('title1', function() {
        expect('dannel').to.equal('dannel');
    });

    it('title2', function() {
        expect('testing').to.not.equal('dannel');
    });
});