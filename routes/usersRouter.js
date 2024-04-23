import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser} from "../controllers/userController.js";

const router = express.Router();

// Retorna todos los productos
router.get('/', getAllUsers);

// Agregar un Producto
router.post('/', createUser);

//Obtener por Id
router.get('/:id', getUserById);

//Actualizar por Id
router.put('/:id', updateUser);

//Obtener por Id
router.delete('/:id', deleteUser);

export default router;