define([],function() { function run($templateCache) {  'use strict';

  $templateCache.put('templates/home.html',
    "<div>\n" +
    "	Tu powinno by TO!\n" +
    "	{{test}} ---------------------\n" +
    "</div>"
  );
}; return ['$templateCache', run] });