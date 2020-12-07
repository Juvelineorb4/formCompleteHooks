const express = require('express');
// requerimos los protocolos cors (http) de react 
const cors = require('cors');
const app = express();

//configuraciones
    // del puerto del servidor 
    app.set('port', process.env.PORT || 4000);

//middleare 
app.use(cors());
app.use(express.json());

//routes
// al usar rutas usar el modulo de Router de express si no dara error 
app.use('/api/formularios', require('./routes/formularios'));

module.exports = app;