import User from '../models/userModel.js';

// Crear un nuevo usuario
async function createUser( req, res  ){
    try {
        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({ newUser});

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error, data: []});
    }
}

// Obtener todos los usuarios
async function getAllUsers  (req, res){
    try {
        const users = await User.find();
        res.status(200).json({ message: 'Ok', data: users});
    } catch (error) {
        res.status(500).send({ message: error, data: []});
    }
};

//obtener un Usuario por ID
async function getUserById (req, res){
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found.")
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

//actualizar un usuario
async function updateUser (req, res){
try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true } );
if (!user){
    return res.status(404).send("User not found.")
}
res.status(200).json(user);

} catch (error) {
    res.status(400).send(error.message);
}
};

//Eliminar Usuario
async function deleteUser (req, res){
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send("User not found.")
        }
        res.status(200).json("User Deleted successfully.");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


// Exporto las funciones
export { createUser, getAllUsers, getUserById, updateUser, deleteUser}