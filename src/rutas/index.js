const rutas = require('express').Router();
const control = require('../controllers/controlador');

rutas.get('/', (req, res)=> {
    res.render('index.html');
});
rutas.get('/productos',control.productos);
module.exports =rutas;