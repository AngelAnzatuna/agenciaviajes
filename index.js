import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error =>  console.log(error))

// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar pug
app.set('view engine', 'pug');


app.use((req, res, next) => {
    const year = new Date();
    // Obtener el año actual
    res.locals.actualYear = year.getFullYear();
    // Nombre sitio
    res.locals.nombreSitio = "Agencia de Viajes"

    next();
})

// Activar body parse
app.use(express.urlencoded({extended: true}));

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})