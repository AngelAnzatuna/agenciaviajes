import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar pug
app.set('view engine', 'pug');

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})