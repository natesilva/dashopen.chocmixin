Hooks.addMenuItem('Go/Search in Dash', 'shift-cmd-h', function() {
  Recipe.run(function(r) {
    var wordrange = r.wordRangeForRange(r.selection);
    var word = r.textInRange(wordrange);
    var url = 'dash://' + encodeURIComponent(word);
    require('openurl').open(url);
  });
});
