const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const knex = require("./knexfile");

app.use(bodyParser.json());

app.get("/coffees", (request, response) => {
    queries.list().then(coffees => {
        response.json({coffees});
    }).catch(console.error);
});

app.get("/coffees/:id", (request, response) => {
    queries.read(request.params.id).then(coffee => {
        coffee
            ? response.json({coffee})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/coffees", (request, response) => {
    queries.create(request.body).then(coffee => {
        response.status(201).json({coffee});
    }).catch(console.error);
});

app.delete("/coffees/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/coffees/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(coffee => {
        response.json({coffee});
    }).catch(console.error);
});

app.use((request, response) => {
    response.sendStatus(404);
});

module.exports = app;
