/* global Hooks, Recipe, Document */

var path = require('path')
  , getKeysForFileType = require('./getKeysForFileType.js')
  , spawn = require('child_process').spawn
  ;

function openUrl(url) {
  var child = spawn('open', [url]);
  var errorText = '';
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', function (data) {
      errorText += data;
  });
  child.stderr.on('end', function () {
      if (errorText.length > 0) {
          var error = new Error(errorText);
          throw error;
      }
  });
}

Hooks.addMenuItem('Go/Search in Dash', 'ctrl-alt-h', function() {
  Recipe.run(function(r) {
    var wordrange = r.wordRangeForRange(r.selection);
    var word = r.textInRange(wordrange);
    var dashUrl = 'dash://' + encodeURIComponent(word);
    openUrl(dashUrl);
  });
});

Hooks.addMenuItem('Go/Search in Dash (Language Sensitive)', 'ctrl-h', function() {
  Recipe.run(function(r) {
    var doc = Document.current();

    var scope = doc.rootScope();

    var fn = doc.filename();
    var extension = path.extname(fn);
    if (!extension && fn[0] === '.') { extension = fn; }
    if (extension && extension[0] === '.') { extension = extension.slice(1); }

    var keys = getKeysForFileType(scope, extension);

    var wordrange = r.wordRangeForRange(r.selection);
    var word = r.textInRange(wordrange);

    var dashUrl;

    if (keys) {
      dashUrl = 'dash-plugin://keys=' + keys + '&query=' +
        encodeURIComponent(word);
    } else {
      dashUrl = 'dash://' + encodeURIComponent(word);
    }

    openUrl(dashUrl);
  });
});
