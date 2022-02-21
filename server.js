var express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
var path = require("path");
var app = express();
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
// make express look in the public directory for assets (css/js/img)
app.use(express.static(path.join(__dirname, "public")));

// This route serves the React app
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "public", "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));