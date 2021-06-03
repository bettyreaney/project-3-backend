var express = require('express');
var router = express.Router();
var Money = require('../models/money')

router.post('/', function(req, res) {
    Money.create(req.body, function(err, money){
        res.sendStatus(201).json(money);
    })
})