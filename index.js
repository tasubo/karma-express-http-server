var path = require('path');
var createExpressHttpServer = function (args, config, logger, helper) {
    var log = logger.create('http.server');
    log.info('Starting');
    var express = require('express');
    var app = express();

    config.expressHttpServer.appVisitor(app, log);

    app.listen(config.expressHttpServer.port);
    log.info('Done');
};

// PUBLISH DI MODULE
module.exports = {
    'framework:express-http-server': ['factory', createExpressHttpServer]
};