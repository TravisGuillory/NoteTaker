// --Add reference to express to interact with html and route to and from server

const express = require("express");
const path = require('path');

var app = express();




// -- Middleware  parsing 


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// -- Routes for html and api calls
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Set port for listener
const PORT = process.env.PORT || 8080;
// --Start server at specified port.
app.listen(PORT, function(){
    console.log("Server is listening at " + PORT);
});

