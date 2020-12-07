const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI);
const URI = 'mongodb://localhost/formularios';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log("DB is connected"))
.catch(err => console.error(err));