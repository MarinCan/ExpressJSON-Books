var express = require('express');
var router = express.Router();
const fs = require('fs')  // <-- viene preinstalado en node


// Leemos los datos del JSO
const libros_json = fs.readFileSync('db/books.json', 'utf-8')
const libros = JSON.parse(libros_json)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { libros });
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


module.exports = router;
