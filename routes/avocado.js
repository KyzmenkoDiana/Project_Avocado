var express = require('express');
var router = express.Router();
var Avocado = require("../models/Avocado").Avocado

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маpшрутов, начинающихся с Avocado');
});

/* Страница Avocado */
router.get('/:nick', function (req, res, next) {
    Avocado.findOne({ nick: req.params.nick }, function (err, Avocado) {
        if (err) return next(err)
        if (!Avocado) return next(new Error("Нет такого авокадо "))
        res.render('Avocado', {
            title: Avocado.title,
            picture: Avocado.avatar,
            desc: Avocado.desc
        })
    })
})

module.exports = router;