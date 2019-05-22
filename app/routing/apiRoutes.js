let randos = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(randos);
    });

    app.post("/api/friends", function(req, res){
        //handle incoming servey results
        //handle compatibility logic
    })
}