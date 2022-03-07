const express = require ('express')
const app = express ();
app.set('view engine', 'ejs')


let persona = {
    nombre: 'Axel',
    apellido: 'Arce',
    estadoCivil: 'Soltero',
    enServicio: true,
    diaoff: false,
    hijos: {
        PrimerHijo: {
            nombre: 'Felipe' 
        },
        SegundoHijo: {
            nombre: 'Maria'
        }
    }
};


app.get('get', (req,res) => {
    res.render('vistas/bienvenido', {
        usuario: usuario
    })
})

app.listen(3000,() => console.log('server port', 3000))
