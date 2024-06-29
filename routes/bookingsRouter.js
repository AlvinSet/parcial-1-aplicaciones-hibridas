import express from "express";
import auth from "../middleware/auth.js";
import {createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking} from "../controllers/bookingController.js";

const router = express.Router();

// Retorna todos los servicios
router.get('/', auth, getAllBookings);

// Agregar un servicio
router.post('/', auth, createBooking);

//Obtener por Id
router.get('/:id', getBookingById);

//Actualizar por Id
router.put('/:id', updateBooking);

//Obtener por Id
router.delete('/:id', deleteBooking);

export default router;