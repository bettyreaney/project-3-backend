var express = require('express');
var router = express.Router();
var moneyCtrl = require('../controllers/money')

router.get('/', moneyCtrl.index);

router.post('/', moneyCtrl.create);

router.put(':id', moneyCtrl.update);

module.exports = router;