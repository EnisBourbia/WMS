const http = require('http');
const cron = require('node-cron');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

const router = express.Router();

var path = require('path');
const hostname = '127.0.0.1';
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend'));
app.use(express.static(path.join(__dirname, '../frontend')))


let routes = require('./routes');
let api = require('./api/api');
app.use('/', routes);
app.use('/api', api);


let jobs = require('./cronjobs/warehouse_volume');
cron.schedule('0 0 0 * * *', () => {
  //'*/10 * * * * *' EVERY 10 SECS
  //'0 0 0 * * *' - AT 00.00
jobs.updater();
});






const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("listening port " + port);
});
