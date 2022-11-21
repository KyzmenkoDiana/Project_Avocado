var mongoose = require('mongoose')
var Schema = mongoose.Schema


var avocadoSchema = new Schema({
    title: String,
    nick: {
        type: String,
        unique: true,
        required: true
    },
    avatar: String,
    desc: String,
    created: {
        type: Date,
        default: Date.now
    }
})
module.exports.Avocado = mongoose.model("Avocado", avocadoSchema)
