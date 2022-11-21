var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var schema = mongoose.Schema({ name: String })

schema.methods.cric = function () {
    console.log(this.get("name") + " сказала пчхи")
}

var Avocado = mongoose.model('Avocado', schema)

var kitty = new Avocado({ name: 'Gabbi' })
kitty.save(function (err) {
    kitty.cric()
})
