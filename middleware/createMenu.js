var Avocado = require("./../models/Avocado").Avocado


module.exports = function (req, res, next) {
    res.locals.nav = []

    Avocado.find(null, { _id: 0, title: 1, nick: 1 }, function (err, result) {
        if (err) throw err
        res.locals.nav = result
        next()
    })

}
