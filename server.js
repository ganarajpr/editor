/**
 * Created with IntelliJ IDEA.
 * User: garama
 * Date: 17/01/13
 * Time: 13:55
 * To change this template use File | Settings | File Templates.
 */

var util = require('util'),
    connect = require('connect'),
    port = 8000;

connect.createServer(connect.static(__dirname)).listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');


