const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const ejs = require('ejs')
const app = express();
const PORT = 7122;
const ScriptPage = require('./api/render.js')
const IndexPage = require('./api/IndexPage.js')
app.set('view engine','ejs')
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(cors()); // CORS

let postData = [];


app.post('/api/jookgru', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { url, data } = req.body;
    console.log('Captured POST request:', { url, data });
    postData.push({ url, data });
    res.status(200).send('Data received successfully');
});

app.get('/api/receive', (req, res) => {
    console.log('GET request received');
    res.json(postData);
});

app.get('/api',ScriptPage)
app.get('/',IndexPage)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
