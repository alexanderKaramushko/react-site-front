// @ts-nocheck
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/api/main', (req, res) => {
    fs.readFile('./backend/data.json', 'utf8', (err, data) => {
        const answer = JSON.parse(data).users;
        res.send(JSON.stringify(answer));
    });
});

app.get('/api/main/processes', (req, res) => {
    fs.readFile('./backend/data.json', 'utf8', (err, data) => {
        const answer = JSON.parse(data).processes;
        res.send(JSON.stringify(answer));
    });
});

app.listen(3000);
