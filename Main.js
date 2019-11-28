const restify = require('restify');
const config = require('./Config');
const BucketsController = require('./bucket/api/BucketsController');
const CommandBus = require('./application/CommandBus');
const QueryBus = require('./infrastructure/QueryBus');
const fs = require('fs');

const InMemoryDataProvider = require('./infrastructure/InMemoryDataProvider')();

const server = restify.createServer({
    name: config.name,
    version: config.version,
    url: config.hostname
});

server.get('/', (req, res, next) => {
    const endpoints = fs.readFileSync('endpoints.json');
    res.send(JSON.parse(endpoints));
    next();
});

const commandBus = CommandBus(InMemoryDataProvider);
const queryBus = QueryBus(InMemoryDataProvider);

/// Buckets Endpoints
server.get('/bucket', async (req, res, next) => {
    const message = await BucketsController({commandBus, queryBus}).getAll();
    res.send(message);
    next();
});

server.get('/bucket/:id', async (req, res, next) => {
    const message = await BucketsController({commandBus, queryBus}).get(req.params.id);
    res.send(message);
    next();
});

server.listen(config.port, () => {
    console.log("%s listening at %s", server.name, server.url);
});
