import express from "express";
import {createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom} from "../controllers/roomController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Retorna todas las habitaciones
router.get('/', auth, getAllRooms);

// Agregar una habitacion
router.post('/', auth, createRoom);

//Obtener por Id
router.get('/:id', auth, getRoomById);

//Actualizar por Id
router.put('/:id', updateRoom);

//Obtener por Id
router.delete('/:id', deleteRoom);

export default router;