import express from "express";
import {createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking} from "../controllers/bookingController.js";

const router = express.Router();

// Retorna todos los servicios
router.get('/', getAllBookings);

// Agregar un servicio
router.post('/', createBooking);

//Obtener por Id
router.get('/:id', getBookingById);

//Actualizar por Id
router.put('/:id', updateBooking);

//Obtener por Id
router.delete('/:id', deleteBooking);

export default router;