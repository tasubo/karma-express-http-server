karma-express-http-server
=========================

Convenience server for Karma runner to create custom responses for various requests.

Installation
==
```
npm install -g karma-express-http-server
```

Configuration
==

```
module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: [ 'express-http-server'],

        files: [
        ],

        autoWatch: true,

        expressHttpServer: {
            port: 3000,
            // this function takes express app object and allows you to modify it
            // to your liking. For more see http://expressjs.com/4x/api.html
            appVisitor: function (app, log) {
                log.info('Visiting');

                app.get('/api/v1/users/me', function (req, res) {
                    res.header("Content-Type", "application/vnd.acmecorp.User+json");
                    res.header('Access-Control-Allow-Origin', '*');
                    var user = {
                        "email": "jon@gmail.com"
                    };
                    res.send(JSON.stringify(user));
                });
            }
        },

        captureTimeout: 5000,

        plugins: [
            'karma-chrome-launcher',
            'karma-express-http-server'
        ]
    });
};
```
