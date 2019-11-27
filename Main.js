const restify = require('restify');
const config = require('./Config');
const bucketsRepository = require('./bucket/BucketsRepository');
const bucketsController = require('./bucket/BucketsController');

const server = restify.createServer({
    name: config.name,
    version: config.version,
    url: config.hostname
});

/// Buckets Endpoints
server.get('/bucket/',async (req, res, next) => {
    const message = await bucketsController(bucketsRepository()).getAll();
    res.send(message);
    next();
});

server.get('/bucket/:id',async (req, res, next) => {
    const message = await bucketsController(bucketsRepository()).get(req.params.id);
    res.send(message);
    next();
});

server.listen(config.port, () => {
    console.log("%s listening at %s", server.name, server.url);
});
