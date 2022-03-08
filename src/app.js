const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

/* --------------------------------------------- */

const persona = {
  nombre: "norberto",
  apellido: "cabrera",
  estadoCivil: "soltero",
  enServicio: true,
  hobbies: ["futbol", "natacion", "correr"],
};
/* --------------------------------------------- */

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/bienvenidos", (req, res) => {
  res.render("bienvenidos", { persona: persona });
});
app.use(express.static(path.join(__dirname, "../public/")));
app.listen(3000, () => console.log("listening on port 3000"));

/* en el caso de login me deja acceder a su contenido desde el navegador unicamente si
ingreso la ruta /login/login.html */
