var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Джульетты */
router.get('/Juliet', function (req, res, next) {
  res.render('avocado', {
    title: "Джульетта",
    picture: "images/Juliet.jpg",
    desc: "Самая красивая и влюбчивая в семье. Любит модно одеваться и всегда радуется жизни. Забывает обо всем ветая в облаках."
  });
});

/* Страница Флафи */
router.get('/Fluffi', function (req, res, next) {
  res.render('avocado', {
    title: "Флафи",
    picture: "images/Fluffi.jpg",
    desc: "Cамый старший член семьи.Считает, что он самый модный и крутой. Самый капризный в семье. Носит трендовые вещи и всегда одевает очки."
  });
});


/* Страница Вектор */
router.get('/Vector', function (req, res, next) {
  res.render('avocado', {
    title: "Вектор",
    picture: "images/Vector.jpg",
    desc: "Cамый младший член семьи. Коронная фраза — «Спорт это жизнь!». С раннего детства занимается спортом. Носит крутые кроссовки и спортивную одежду."
  });
});

module.exports = router;
