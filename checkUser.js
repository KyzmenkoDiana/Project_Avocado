var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/ProjectAvocado")
var User = require("./models/user.js").User

var first_user = new User({
    username: "Tanya",
    password: "378245"
})

first_user.save(function (err, user) {
    if (err) throw err
    console.log(user)
})
