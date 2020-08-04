// @ts-nocheck
const express = require('express');
const fs = require('fs');

const app = express();
app.get('/api/main', (req, res) => {
    fs.readFile('./backend/data.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.listen(3000);
