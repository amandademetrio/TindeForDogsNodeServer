var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');

var db_url = 'mongodb://localhost:27017/Dogs'

require('./config/mongoose.js')(db_url);

require('./config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
})