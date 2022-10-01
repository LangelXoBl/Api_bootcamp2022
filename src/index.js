require('dotenv').config();
const express = require('express');
const rutasUser = require('./routes/usuarios.routes');
const rutasCateg = require('./routes/categorias.routes')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//*rutas
app.use('/user', rutasUser);
app.use('/categorias', rutasCateg)


app.listen(process.env.PORT, () =>
  console.log(`listen on port ${process.env.PORT}`)
);
