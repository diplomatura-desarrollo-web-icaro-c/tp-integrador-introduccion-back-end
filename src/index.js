// Make express server
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const unDia = 1000 * 60 * 60 * 60 * 24;
const app = express();
const PORT = 3000;

//Declaro carpeta estatica public para guardar css
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')),
  bodyParser.urlencoded({ extended: true })
);

app.set('view engine', 'ejs')

app.use(sessions({
  secret: "123456",
  saveUnitialized:true,
  cookie: {maxAge: unDia},
  resave: false
}));

app.use(cookieParser());

const userRoutes = require("../routes/Usuarios");
app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto ", PORT);
});
