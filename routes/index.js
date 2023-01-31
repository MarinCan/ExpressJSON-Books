var express = require('express');
var router = express.Router();
const fs = require('fs');  // <-- viene preinstalado en node
const pool = require('../db')


// Leemos los datos del JSO
const libros_json = fs.readFileSync('db/books.json', 'utf-8')
const libros = JSON.parse(libros_json)


/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { libros });
});

/* GET home page. -- MYSQL ver */
router.get('/home2', async function(req, res, next) {
  const [result_books] = await pool.query('SELECT * FROM books')
  console.log(result_books)
  res.render('home-2', { result_books })

  // res.json(result)
});

/* GET Add-book page. */
router.get('/add-books', function(req, res, next) {
  res.render('add-books', { title: 'Añadir' });
});

// Metodo POST para almacenar las variables del form y guardarlas en el JSON 
router.post('/add-books', function(req, res, next){
  // console.log(req.body)
  const { title, author, image, description} = req.body

  let nuevo_libro = {
    title: title,
    author: author,
    image: image,
    description: description
  }

  libros.push(nuevo_libro)

  const libros_json = JSON.stringify(libros)
  fs.writeFileSync('db/books.json', libros_json, 'utf-8')

  res.redirect('/')

})


/* GET Add-book page -- MYSQL ver */
router.get('/add-books-db', function(req, res, next) {
  res.render('add-books-db', { title: 'Añadir' });
});

// Metodo POST para almacenar las variables del form y guardarlas en BBDD MYSQL
router.post('/add-books-db', function(req, res, next){
  // console.log(req.body)
  const { title, author, image, description} = req.body

  pool.query("INSERT INTO books SET ?", {
    title,
    author,
    image,
    description
  })

  res.redirect('/home2')

})

module.exports = router;
