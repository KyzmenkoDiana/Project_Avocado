var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE avocados;'
var seedQuery = 'INSERT INTO avocados (title, nick, avatar, about) VALUES ("Джульетта", "Juliet", "/images/Juliet.jpg", "Самая красивая и влюбчивая в семье. Любит модно одеваться и всегда радуется жизни. Забывает обо всем ветая в облаках."), ("Флафи", "Fluffi", "/images/Fluffi.jpg", "Cамый старший член семьи.Считает, что он самый модный и крутой. Самый капризный в семье. Носит трендовые вещи и всегда одевает очки."), ("Вектор", "Vector", "/images/Vector.jpg", "Cамый младший член семьи. Коронная фраза — «Спорт это жизнь!». С раннего детства занимается спортом. Носит крутые кроссовки и спортивную одежду.");'



var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'Avocados'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
    if (err) {
        throw err
    }
    // Seed content
    connection.query(seedQuery, err => {
        if (err) {
            throw err
        }
        console.log("SQL seed completed!")
        connection.end()
    })
})