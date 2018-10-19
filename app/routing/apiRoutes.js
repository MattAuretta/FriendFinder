var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res){
        var userData = req.body;
        console.log(userData);
        friends.push(userData);
    })
};