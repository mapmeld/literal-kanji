var assert = require('assert');
var literalKanji = require('../index.js');

describe('Japanese names', function() {
  it('should return literal name for Tokyo', function() {
    var result = literalKanji('東京');
    assert.equal(result, 'east capital');
  });

  it('should describe a thesaurus', function() {
    var result = literalKanji('大辞林');
    assert.equal(result, 'large resign grove');
  });
});
