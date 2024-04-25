import express from "express";
import {createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom} from "../controllers/roomController.js";

const router = express.Router();

// Retorna todas las habitaciones
router.get('/', getAllRooms);

// Agregar una habitacion
router.post('/', createRoom);

//Obtener por Id
router.get('/:id', getRoomById);

//Actualizar por Id
router.put('/:id', updateRoom);

//Obtener por Id
router.delete('/:id', deleteRoom);

export default router;