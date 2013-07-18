PlanningPoker
=============

How to run
----------

Run in root directory with:

    grunt

Possible Grunt Tasks
--------------------

All can be run with:

    grunt <taskname>

**jasmine_node**

This runs the jasminetests for the node application.

**jasmine:appRun**

This runs the jasminetests for the client application.

**markdown**

This regenerates the html doc from the markdown files

**watch**

This starts up all the watches ( html, css, js and tests ).

**watch:html**

Watch all the html files.

**watch:css**

Watch all less files.

**watch:js**

Watch all js files.

**watch:tests**

Watch all test files.

**nodemon**

Start up the node server.

**less**

Process the less files and output a css file.

**jshint**

Execute JSHint on all the js files.

**concurrent**

Start up the nodemon task and the watch task in a concurrent fashion.
