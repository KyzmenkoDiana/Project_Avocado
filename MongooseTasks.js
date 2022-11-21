var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var Avocado = mongoose.model('Avocado', { name: String })

var kitty = new Avocado({ name: 'Gabbi' })
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('пчхи')
    }
})
