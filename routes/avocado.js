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
    async.parallel([
        function (callback) {
            Avocado.findOne({ nick: req.params.nick }, callback)
        },
        function (callback) {
            Avocado.find({}, { _id: 0, title: 1, nick: 1 }, callback)
        }
    ],
        function (err, result) {
            if (err) return next(err)
            var Avocado = result[0]
            var avocados = result[1] || []
            if (!Avocado) return next(new Error("Нет такого авокадо"))
            res.render('Avocado', {
                title: Avocado.title,
                picture: Avocado.avatar,
                desc: Avocado.desc,
                menu: avocados
            });
        })
})

module.exports = router
