
var express = require("express");
var bodyParser = require("body-parser");


var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
