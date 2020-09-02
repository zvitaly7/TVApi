const express = require('express');
const config = require('./config');

const app = express();
const port = process.env.PORT || config.port;

app.use(express.json({extended: true}));
app.use('/api/', require('../server/routes'));

global.responseContainer = [];

async function start() {
    try {
        app.listen(port, () => console.log(`Running on port ${port}`));

    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();
