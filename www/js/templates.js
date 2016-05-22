define([],function() { function run($templateCache) {  'use strict';

  $templateCache.put('templates/home.html',
    "<div>\n" +
    "	Tu powinno by TO!\n" +
    "	{{test}} \n" +
    "	<img src=\"./img/super_coder.jpg\" alt=\"\">\n" +
    "</div>"
  );
}; return ['$templateCache', run] });