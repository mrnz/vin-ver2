define([],function() { function run($templateCache) {  'use strict';

  $templateCache.put('templates/home.html',
    "<div>\n" +
    "	<div id=\"abc\">abc</div>\n" +
    "	Tu powinno by TO!\n" +
    "	{{test}} \n" +
    "	<img id=\"super-coder\" src=\"./img/super_coder.jpg\" alt=\"\" />\n" +
    "			\n" +
    "	<select name=\"\" id=\"\" ng-options=\"item.id as item.name for item in brands\" ng-model=\"selection.brand\"></select>\n" +
    "\n" +
    "</div>"
  );
}; return ['$templateCache', run] });