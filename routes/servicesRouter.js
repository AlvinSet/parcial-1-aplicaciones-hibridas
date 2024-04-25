import express from "express";
import { createService, getAllServices, getServiceById, updateService, deleteService} from "../controllers/serviceController.js";

const router = express.Router();

// Retorna todos los servicios
router.get('/', getAllServices);

// Agregar un servicio
router.post('/', createService);

//Obtener por Id
router.get('/:id', getServiceById);

//Actualizar por Id
router.put('/:id', updateService);

//Obtener por Id
router.delete('/:id', deleteService);

export default router;