
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

module.exports = app;
