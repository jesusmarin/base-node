require("dotenv").config();
import express from 'express';
import path from 'path';
import morgan from 'morgan';
const cors = require('cors');

//inicializacion del sistema
const app = express()
// cors
var corsOptions = {
  origin: '*', // Reemplazar con dominio
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
//settings
app.set('port', process.env.PORT || 8081);
app.set('views', path.join(__dirname + 'views'));


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded(
  {
      extended: true,
      limit:"50mb",
      parameterLimit:500000000
  }
));
app.use(express.json());

//Global variables


//static files
app.set(express.static(path.join(__dirname, 'public')));


module.exports={
  app
}