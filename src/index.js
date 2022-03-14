// Make express server
const express = require("express");
const app = express();
const PORT = 3000;

//declaro carpeta estatica public para guardar css
const path = require('path')
app.use(express.static(path.join(__dirname,'../public')));

app.set('view engine', 'ejs')

const userRoutes = require("../routes/Usuarios");
app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto ",PORT);
});
