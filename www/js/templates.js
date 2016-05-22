define([],function() { function run($templateCache) {  'use strict';

  $templateCache.put('templates/home.html',
    "<div>\n" +
    "	<div id=\"abc\">abc</div>\n" +
    "	Tu powinno by TO!\n" +
    "	{{test}} \n" +
    "	<img id=\"dsadsa\" src=\"./img/super_coder.jpg\" alt=\"\">\n" +
    "</div>"
  );
}; return ['$templateCache', run] });