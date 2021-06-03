var express = require('express');
var router = express.Router();
var Money = require('../models/money')

router.get('/', function(req, res) {
    Money.find({}, function(err, allMoney){
        return res.status(200).json(allMoney)
    })
});

router.post('/', function(req, res) {
    console.log(req.body)
    Money.create(req.body, function(err, money){
        return res.status(200).json(money);
    })
});


module.exports = router;