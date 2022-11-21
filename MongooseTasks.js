var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var Avocado = require("./models/Avocado.js").Avocado


var Avocado = new Avocado({
    title: "Габби",
})

console.log(Avocado)
Avocado.save(function () {
    console.log(arguments)
})

