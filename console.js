const express = require('express');
const ParseDashboard = require('parse-dashboard');

const serverUrl = process.env.SERVER_URL || "http://localhost:1337/api";

const dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": serverUrl,
            "appId": 'photoAPP',
            "masterKey": 'fdsghuykry3287g', // Keep this key secret!
            "appName": "MyApp"
        }
    ]
});

const app = express();

// make the Parse Dashboard available at /dashboard
app.use('/', dashboard);

const httpServer = require('http').createServer(app);
httpServer.listen(4040);