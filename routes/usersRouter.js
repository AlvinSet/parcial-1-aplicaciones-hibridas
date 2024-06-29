import express from "express";
import { createUser, login, deleteUser, getAllUsers, getUserById, updateUser, getUserProfile} from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Retorna todos los usuarios
router.get('/', getAllUsers);

// Agregar un usuario
router.post('/', createUser);

// Login
router.post('/login', login);

// Profile
router.get('/profile', auth, getUserProfile); 

//Obtener por Id
router.get('/:id', auth, getUserById);

//Actualizar por Id
router.put('/:id' , auth, updateUser);

//Obtener por Id
router.delete('/:id', auth, deleteUser);

export default router;