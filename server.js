let express = require("express");

//creating express server
let app = express();

//sets inital port
let PORT = process.env.PORT || 8080;

//sets up express app to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//starting server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
})