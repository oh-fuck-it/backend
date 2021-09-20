const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();

const databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
const serverUrl = process.env.SERVER_URL || "http://localhost:1337/api";

const api = new ParseServer({
    databaseURI: databaseUri || "mongodb://localhost/dev", // Connection string for your MongoDB database
    cloud: __dirname + '/cloud/main.js', // Path to your Cloud Code
    appId: 'photoAPP',
    masterKey: 'fdsghuykry3287g', // Keep this key secret!
    fileKey: 'fsdfhsjiolyr43278',
    serverURL: serverUrl // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/api', api);

app.listen(1337, function() {
    console.log('parse-server running on port 1337.');
});