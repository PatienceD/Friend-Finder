let path = require("path");

module.exports = function(app){
    
    //the servey route will take us to the servey page
    app.get("/survey", function(req, res){
        res.sendfile(path.join(__dirname, "../public/survey.html"))
    });

    //every other url will take us to the home page
    app.get("*", function(req, res){
        console.log("here");
        res.sendfile(path.join(__dirname, "../public/home.html"));
    });
};