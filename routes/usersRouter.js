import express from "express";
import { createUser, login, deleteUser, getAllUsers, getUserById, updateUser} from "../controllers/userController.js";

const router = express.Router();

// Retorna todos los usuarios
router.get('/', getAllUsers);

// Agregar un usuario
router.post('/', createUser);

// Login
router.post('/login', login);


//Obtener por Id
router.get('/:id', getUserById);

//Actualizar por Id
router.put('/:id', updateUser);

//Obtener por Id
router.delete('/:id', deleteUser);

export default router;