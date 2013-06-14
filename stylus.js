var connect = require('connect')
    , stylus = require('stylus')
    , axis = require('axis-css');

var server = connect();

function compile(str, path) {
    return stylus(str)
        .set('final.styl', path)
        .use(axis());
}

server.use(stylus.middleware({
    src: __dirname + "/stylus/"
    , compile: compile
}));

