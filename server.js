/**
* This is a very simple static web server.
* You can start the server by using the following command line
* node server.js
* You can use the options
* --port -p XXXX To specify a port (default 3000)
* --base -b basePath To specify a base path (relative to current)
* ie: node server.js --port 8888 --base public
**/

var express = require("express");
var app = express();
var argv = require("yargs").argv;

var port = process.env.PORT || argv.port || argv.p || 3000;
var basePath = argv.base || argv.b || "";
basePath += "/";

app.use(express.static(__dirname + basePath));

app.listen(port);
console.log("Server listening on port " + port + ", serving folder " + basePath);
