/**
 * Created with IntelliJ IDEA.
 * User: garama
 * Date: 17/01/13
 * Time: 13:55
 * To change this template use File | Settings | File Templates.
 */

var util = require('util'),
    connect = require('connect'),
    port = 8000,
    stylus = require("stylus"),
    axis = require("axis-css");


var server = connect();


function compile(str, path) {
    util.puts("compiling stylus");
    return stylus(str)
        .set('filename', path)
        .use(axis());
}

server.use(stylus.middleware({
    src: __dirname
    , compile: compile
}));
server.use(connect.static(__dirname));
server.listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');


