var express = require('express')
var router = express.Router()
var Avocado = require("../models/Avocado").Avocado
var async = require("async")

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с avocados')
});

/* Страница Авокадо */
router.get('/:nick', function (req, res, next) {
    Avocado.findOne({ nick: req.params.nick }, function (err, avocado) {
        if (err) return next(err)
        if (!avocado) return next(new Error("Нет такого авокадо"))
        res.render('avocado', {
            title: avocado.title,
            picture: avocado.avatar,
            desc: avocado.desc
        })
    })
})


module.exports = router
