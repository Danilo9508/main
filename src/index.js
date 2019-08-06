const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
//configuracion
app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// middlewares
app.use(morgan('dev'));

//Rutas
const routes = require('./rutas/index');
app.use(routes);

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Inicio servidor
app.listen(app.get('port'), () => {
    console.log("Servidor iniciado", app.get('port'));
});