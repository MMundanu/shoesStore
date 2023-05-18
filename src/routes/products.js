var express = require('express');
var router = express.Router();


// /products

router
    .get('/detalle/:id')
    .get('/editarProducto/:id')
    .put('/update/:id')
    .get('/crearProducto')
    .post('/store')
    
    .get("/")
    .get('/category/:id')
    .delete("/remove/:id")

module.exports = router;
