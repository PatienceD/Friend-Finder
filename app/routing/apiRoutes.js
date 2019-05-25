let randos = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(randos);
    });

    app.post("/api/friends", function (req, res) {
        let results = req.body.scores;
        for (let i = 0; i < results.length; i++) {
            results[i] = parseInt(results[i].split(" ")[0]);
        }
        let bestCandidate;
        let bestDiff = Number.MAX_SAFE_INTEGER;

        for (i = 0; i < randos.length; i++) {
            var tempDiff = calcDiff(results, randos[i].scores);
            console.log("The Diff between", results, "and", randos[i].name, randos[i].scores, "is", tempDiff);
            if (tempDiff < bestDiff) {
                bestDiff = tempDiff;
                bestCandidate = i;
            }
        }

        function calcDiff(userInput, randoFriendInput) {
            var DiffAmount = 0;
            for (var i = 0; i < userInput.length; i++) {
                DiffAmount += Math.abs(userInput[i] - randoFriendInput[i]);
            }
            return DiffAmount;
        }

        res.send(randos[bestCandidate]);
    });
};

