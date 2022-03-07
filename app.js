const express = require('express');
const path = require ('path');
const ejs = require ('ejs');
const app = express();


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

//Static

app.use (express.static(path.join(__dirname, 'public')));


app.listen(3000, () => console.log('Listening on port 3000'));



