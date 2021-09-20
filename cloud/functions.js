Parse.Cloud.define('hello', req => {
    req.log.info(req);
    return 'Hi';
});

Parse.Cloud.define('asyncFunction', async req => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    req.log.info(req);
    return 'Hi async';
});
