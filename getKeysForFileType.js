// map Chocolat scopes to Dash docsets

var docsetMap = {
  actionscript: {
      extensions: ['as', 'as3'],
      scopes: ['2.actionscript.source'],
      keys: ['actionscript']
  },

  boo: {
    extensions: ['boo'],
    scopes: [],
    keys: ['unity3d']
  },

  c: {
    extensions: ['c', 'h'],
    scopes: ['c.source'],
    keys: ['c', 'glib', 'gl2', 'gl3', 'gl4', 'manpages']
  },

  'c++': {
    extensions: ['cpp', 'cc', 'cp', 'cxx', 'c++', 'C', 'h', 'hh', 'hpp', 'hxx',
      'h++', 'inl', '.ipp'],
    scopes: ['c++.source'],
    keys: ['cpp', 'net', 'boost', 'qt', 'cvcpp', 'cocos2dx', 'c', 'manpages']
  },

  'c#': {
    extensions: ['cs'],
    scopes: [],
    keys: ['net', 'mono', 'unity3d']
  },

  cappucino: {
    extensions: ['j', 'h'],
    scopes: ['js.objj.source'],
    keys: ['cappucino']
  },

  clojure: {
    extensions: ['clj', 'edn'],
    scopes: ['clojure.source'],
    keys: ['clojure']
  },

  coffescript: {
    extensions: ['coffee'],
    scopes: ['coffee.source'],
    keys: ['coffee']
  },

  coldfusion: {
    extensions: ['cfm', 'cfml'],
    scopes: [],
    keys: ['cf']
  },

  configfiles: {
    extensions: ['config'],
    scopes: [],
    keys: ['nginx']
  },

  css: {
    extensions: ['css'],
    scopes: ['css.source'],
    keys: ['css', 'bootstrap', 'foundation', 'less', 'cordova', 'phonegap']
  },

  elixir: {
    extensions: ['ex', 'exs'],
    scopes: [],
    keys: ['elixir']
  },

  erlang: {
    extensions: ['erl', 'hrl'],
    scopes: ['erlang.source', 'erlang.html.text.yaws'],
    keys: ['erlang']
  },

  go: {
    extensions: ['go'],
    scopes: ['go.source'],
    keys: ['go']
  },

  haskell: {
    extensions: ['hs', 'lhs'],
    scopes: ['haskell.source'],
    keys: ['haskell']
  },

  haml: {
    extensions: ['haml'],
    scopes: ['haml.text'],
    keys: ['haml']
  },

  html: {
    extensions: ['html', 'htm', 'shtml', 'xhtml', 'phtml', 'inc', 'tmpl', 'tpl',
      'ctp'],
    scopes: ['basic.html.text'],
    keys: ['html', 'svg', 'css', 'bootstrap', 'foundation', 'javascript',
      'jquery', 'jqueryui', 'jquerym', 'angularjs', 'backbone', 'marionette',
      'meteor', 'moo', 'prototype', 'ember', 'lodash', 'underscore', 'sencha',
      'extjs', 'knockout', 'zepto', 'cordova', 'phonegap', 'yui']
  },

  jade: {
    extensions: ['jade'],
    scopes: ['jade.source'],
    keys: ['jade']
  },

  java: {
    extensions: ['java', 'jsp', 'bsh'],
    scopes: ['java.source', 'html.jsp.text'],
    keys: ['java', 'javafx', 'grails', 'groovy', 'playjava', 'spring', 'cvj',
      'processing']
  },

  javascript: {
    extensions: ['js', 'htc', 'jsx'],
    scopes: ['js.source', 'js.rails.source'],
    keys: ['javascript', 'jquery', 'jqueryui', 'jquerym', 'backbone',
      'marionette', 'meteor', 'sproutcore', 'moo', 'prototype', 'bootstrap',
      'foundation', 'lodash', 'underscore', 'ember', 'sencha', 'extjs',
      'titanium', 'knockout', 'zepto', 'yui', 'd3', 'svg', 'dojo', 'coffee',
      'nodejs', 'express', 'chai', 'html', 'css', 'cordova', 'phonegap',
      'unity3d']
  },

  less: {
    extensions: ['less'],
    scopes: ['css.less.source'],
    keys: ['less']
  },

  lisp: {
    extensions: ['lisp'],
    scopes: ['lisp.source'],
    keys: ['lisp']
  },

  lua: {
    extensions: ['lua'],
    scopes: ['lua.source'],
    keys: ['lua', 'corona']
  },

  markdown: {
    extensions: ['md', 'mdown', 'markdown', 'markdn'],
    scopes: ['html.markdown.text', 'html.markdown.multimarkdown.text'],
    keys: ['markdown']
  },

  'objective-c': {
    extensions: ['m', 'h'],
    scopes: ['objc.source'],
    keys: ['iphoneos', 'macosx', 'appledoc', 'cocos2d', 'cocos3d', 'kobold2d',
      'sparrow', 'c', 'manpages']
  },

  'objective-c++': {
    extensions: ['mm', 'M', 'h'],
    scopes: ['objc++.source'],
    keys: ['cpp', 'iphoneos', 'macosx', 'appledoc', 'cocos2dx', 'cocos2d',
      'cocos3d', 'kobold2d', 'sparrow', 'c', 'manpages']
  },

  ocaml: {
    extensions: ['ml', 'mli', 'mll', 'mly'],
    scopes: ['ocaml.source'],
    keys: ['ocaml']
  },

  perl: {
    extensions: ['pl', 'pm', 'pod', 't'],
    scopes: ['perl.source'],
    keys: ['perl', 'manpages']
  },

  php: {
    extensions: ['php', 'inc'],
    scopes: ['basic.html.text'],
    keys: ['php', 'wordpress', 'drupal', 'zend', 'laravel', 'yii', 'joomla',
      'ee', 'codeigniter', 'cakephp', 'symfony', 'typo3', 'twig', 'smarty',
      'html', 'mysql', 'sqlite', 'mongodb', 'psql', 'redis']
  },

  processing: {
    extensions: ['pde'],
    scopes: ['processing.source'],
    keys: ['processing']
  },

  puppet: {
    extensions: ['pp'],
    scopes: [],
    keys: ['puppet']
  },

  python: {
    extensions: ['py', 'rpy', 'pyw', 'cpy'],
    scopes: ['python.source', 'django.python.source'],
    keys: ['python', 'django', 'twisted', 'sphinx', 'flask', 'cvp']
  },

  r: {
    extensions: ['r', 's', 'rd', 'Rprofile'],
    scopes: ['r.source'],
    keys: ['r']
  },

  ruby: {
    extensions: ['rb', 'rbx', 'rjs', 'Rakefile', 'rake', 'cgi', 'fcgi',
      'gemspec', 'irbrc', 'capfile', 'Gemfile'],
    scopes: ['ruby.source', 'rails.ruby.source', 'haml.text'],
    keys: ['ruby', 'rubygems', 'rails']
  },

  sass: {
    extensions: ['sass', 'scss'],
    scopes: ['sass.source'],
    keys: ['sass', 'compass', 'bourbon', 'neat', 'css']
  },

  scala: {
    extensions: ['scala'],
    scopes: ['scala.source'],
    keys: ['scala', 'akka', 'playscala']
  },

  shellScripts: {
    extensions: ['sh'],
    scopes: ['shell.source'],
    keys: ['bash', 'manpages']
  },

  sql: {
    extensions: ['sql'],
    scopes: ['source.sql'],
    keys: ['mysql', 'sqlite', 'psql']
  },

  stylus: {
    extensions: ['styl', 'stylus'],
    scopes: [],
    keys: ['stylus']
  },

  tcl: {
    extensions: ['tcl', 'adp'],
    scopes: ['source.tcl'],
    keys: ['tcl']
  },

  yaml: {
    extensions: ['yaml', 'yml'],
    scopes: ['source.yaml'],
    keys: ['chef', 'ansible']
  }
};

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

module.exports = getKeysForFileType;
