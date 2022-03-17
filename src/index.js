// Make express server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

//Declaro carpeta estatica public para guardar css
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')),
  bodyParser.urlencoded({ extended: true })
);

app.set('view engine', 'ejs')

const userRoutes = require("../routes/Usuarios");
app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto ", PORT);
});
