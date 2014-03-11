/* global Hooks, Recipe, Document */

var path = require('path')
  , spawn = require('child_process').spawn
  , docsetMap = require('./docsetMap.json')
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

//
// Given a Chocolat scope, and the file extension, guess what kind
// of file it is and return the corresponding Dash search keys.
//
function getKeysForFileType(scope, extension) {
  var byExtension = Object.keys(docsetMap).filter(function(key) {
    if (!extension) { return false; }
    return (docsetMap[key].extensions.indexOf(extension) !== -1);
  });

  var byScope = Object.keys(docsetMap).filter(function(key) {
    return (docsetMap[key].scopes.indexOf(scope) !== -1);
  });

  // prefer exact extension matches
  if (byExtension.length === 1) {
    return docsetMap[byExtension[0]].keys.join(',');
  }

  // next, exact scope matches
  if (byScope.length === 1) {
    return docsetMap[byScope[0]].keys.join(',');
  }

  // next, look for a single match in both extensions and scope
  var inBoth = byExtension.filter(function(key) {
    return (byScope.indexOf(key) !== -1);
  });

  if (inBoth.length === 1) {
    return docsetMap[inBoth[0]].keys.join(',');
  }

  // punt
  if (byExtension.length) {
    return docsetMap[byExtension[0]].keys.join(',');
  } else if (byScope.length) {
    return docsetMap[byScope[0]].keys.join(',');
  }
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
