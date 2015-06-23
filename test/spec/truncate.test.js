var truncate = require('../../src/truncate');

describe('#truncate', function () {
  it('should return true', function () {
    truncate(true).should.be.true;
  });
});
