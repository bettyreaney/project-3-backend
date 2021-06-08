var Money = require('../models/money')


module.exports = {
    index,
    create,
    update,
    delete: deleteItem,
}

function index(req, res) {
    Money.find({}, function(err, allMoney){
        return res.status(200).json(allMoney)
    });
}

function create(req, res) {
    console.log(req.body)
    Money.create(req.body, function(err, money){
        return res.status(200).json(money);
    });
}

function deleteItem(req, res) {
    Money.findByIdAndDelete(req.params.id, req.body, function() {
        return res.redirect('/');
    })
}

function update(req, res) {
    Money.findByIdAndUpdate(req.params.id, req.body, function() {
        index(req, res);
    });
}