var jisho = require('jisho-module');

var literalKanji = function (kanjiPhrase) {
  var output = '';
  for (var i = 0; i < kanjiPhrase.length; i++) {
    if (kanjiPhrase[i].match(/\s/)) {
      // space
      output += kanjiPhrase[i];
    } else {
      var kinfo = jisho(kanjiPhrase[i]);
      if (kinfo && kinfo.meaning.length) {
        // known kanji
        output += kinfo.meaning[0] + ' ';
      } else {
        // unknown kanji
        output += kanjiPhrase[i];
      }
    }
  }
  return output.trim();
};

module.exports = literalKanji;
