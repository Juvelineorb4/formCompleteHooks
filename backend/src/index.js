// requerimos la carpeta con las variables de entorno
//require('dotenv').config();
//importamos app.js
const app = require('./app');
//importamos la base de datos 
require('./database');


// iniciamos el servidor
async function main(){
    await app.listen(app.get('port'));
    console.log('server on port 4000');

}
main();