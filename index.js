import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';


const app = express();
const port = 3000;


app.use( express.json() );


// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/hotelDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});


app.use('/apiHotel', routes );


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto ' + port);
})

