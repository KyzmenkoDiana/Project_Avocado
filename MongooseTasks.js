var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var Avocado = require("../models/avocado").Avocado

var Avocado = new Avocado({
    title: "Джульетта",
})

console.log(Avocado)
Avocado.save(function (err, avocado, affected) {
    console.log(Avocado.title)
})
