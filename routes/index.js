var express = require('express')
var router = express.Router()
var Avocado = require("../models/Avocado").Avocado


/* GET home page. */
router.get('/', function (req, res, next) {
    Avocado.find({}, { _id: 0, title: 1, nick: 1 }, function (err, menu) {
        req.session.greeting = "Hi!!!",
            res.cookie('greeting', 'Hi!!!').render('index', {
                title: 'Express',
                menu: menu
            });
    })

});
/*
router.get('/Juliet', function (req, res, next) {
    res.render('avocado', {
        title: "Джульетта",
        picture: "images/Juliet.jpg",
        desc: "Самая красивая и влюбчивая в семье. Любит модно одеваться и всегда радуется жизни. Забывает обо всем ветая в облаках."
    });
});

router.get('/Fluffi', function (req, res, next) {
    res.render('avocado', {
        title: "Флафи",
        picture: "images/Fluffi.jpg",
        desc: "Cамый старший член семьи.Считает, что он самый модный и крутой. Самый капризный в семье. Носит трендовые вещи и всегда одевает очки."
    });
});

router.get('/Vector', function (req, res, next) {
    res.render('avocado', {
        title: "Вектор",
        picture: "images/Vector.jpg",
        desc: "Cамый младший член семьи. Коронная фраза — «Спорт это жизнь!». С раннего детства занимается спортом. Носит крутые кроссовки и спортивную одежду."
    });
});
*/

module.exports = router;
