const express =  require('express');
const path =  require('path');
const bodyParser = require('body-parser');
const webpush = require('./config/web-push');
const app = express();
const port = 5000;

// connect to the db - mongodb database on docker
require('./config/db')(); 

// use body parser to parse request body
app.use(bodyParser.json());
// serve files inside client folder
app.use(express.static(path.join(__dirname, '../client')));
require('./route/route')(app); // routes
// setup web-push
webpush();

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});