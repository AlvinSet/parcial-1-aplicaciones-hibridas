import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

const corsOptions = {
    origin: process.env.CORS_ORIGIN,  // Permite solicitudes del frontend
    optionsSuccessStatus: 200 
};


app.use(cors(corsOptions));
app.use( express.json() );


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
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

