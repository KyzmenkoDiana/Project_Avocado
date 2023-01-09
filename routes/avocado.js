var express = require('express')
var router = express.Router()
var db = require('../mySQLConnect.js');
//var Avocado = require("../models/Avocado").Avocado
//var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")


/* GET avocados listing. */
router.get('/', function (req, res, next) {
    res.send('<h1>Новый маршрутизатор, начинающийся с avocados</h1>');
});


/* Страница героев 
checkAuth убираем, пока, так как проверка сессии написана на монго
*/
router.get("/:nick", function (req, res, next) {
    db.query(`SELECT * FROM avocados WHERE avocados.nick = '${req.params.nick}'`, (err, avocados) => {
        if (err) {
            console.log(err);
            if (err) return next(err)
        } else {
            if (avocados.length == 0) return next(new Error("Нет такого героя для поиска"))
            var avocado = avocados[0];
            res.render('avocado', {
                title: avocado.title,
                picture: avocado.avatar,
                desc: avocado.about
            })
            // result(null, results);
        }
    })
    // Avocado.findOne({nick:req.params.nick}, function(err, avocado){
    // if(err) return next(err)
    // if(!Avocado) return next(new Error("Нет такого героя в этом мультике"))
    // res.render('avocado', {
    // title: avocado.title,
    // picture: avocado.avatar,
    // desc: avocado.desc,
    // });
    // })
});


module.exports = router;
