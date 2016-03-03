/*eslint-disable*/
'use strict';
var express = require('express');
var fs = require('fs');
var request = require('request');
require('request-debug')(request);

var fetch = require('node-fetch');
const PORT = 8080;
var devMode = !process.env.NODE_ENV || process.env.NODE_ENV !== 'production';

function sendIndex(expressResponse) {
    if (devMode) {
        expressResponse.sendFile(__dirname + '/index.html');
    }
    else {
        expressResponse.sendFile(__dirname + '/index.prod.html');
    }
}

function startServer() {
    var app = express();

    app.get('/health', function (req, res) {
        res.send('OK');
    });

    app.get('/*', function (expressRequest, expressResponse) {
        var staticFiles = ['/config.js', '/css/', '/jspm_packages/', '/src/', '/lib/', '/favicon.ico'];
        var path = expressRequest.path;
        for (var i = 0; i < staticFiles.length; i++) {
            if (path.startsWith(staticFiles[i])) {
                expressResponse.sendFile(__dirname + expressRequest.path, function (err) {
                    if (err) {
                        console.log('could not find file: ', err);
                        expressResponse.status(404).send('file not found');
                    }
                });
                return;
            }
        }
        sendIndex(expressResponse);
    });

    if (devMode) {
        require('chokidar-socket-emitter')({port: 9111, path: 'src'});
    }
    app.listen(PORT);
}
startServer();
