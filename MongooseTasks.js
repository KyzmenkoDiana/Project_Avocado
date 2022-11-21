var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var Avocado = require("./models/Avocado.js").Avocado

var Avocado = new Avocado({
    title: "Габби",
})

console.log(Avocado)
cat.save(function (err, cat, affected) {
    console.log(cat.title)
})
