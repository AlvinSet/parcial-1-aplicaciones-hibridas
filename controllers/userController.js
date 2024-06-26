import User from '../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Crear un nuevo usuario

const salt= 10;


async function createUser( req, res  ){
    try {
        const {name, email, phone, password} = req.body;

        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name: name,
            email: email,
            phone: phone,
            password: passwordHash
        });

        await newUser.save();

        res.status(201).json({ newUser: { name: newUser.name}});

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error, data: []});
    }
}


async function login (req, res){
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email }).populate({
            path: 'bookings',
            populate: [
                { path: 'room', select: 'number type' },  // Popula los detalles de la habitación
                { path: 'services', select: 'name price' }  // Popula los detalles de los servicios
            ]
        });

        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        const pass = await bcrypt.compare(password, user.password);
        if (!pass) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({userId: user._id, email: user.email},process.env.JWT_SECRET, {expiresIn: '1h'});
        console.log("Generated token:", token);
        console.log("User data:", user);
        res.status(200).json({token: token, user: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            bookings: user.bookings
        }});
        // console.log("Token:", token);


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
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
    const { password } = req.body;
    if (password) {
        req.body.password = await bcrypt.hash(password, 10);
    }
    
try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true } );
if (!user){
    return res.status(404).send("User not found.")
}
res.status(200).json({ name: user.name, email: user.email});

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

async function getUserProfile(req, res) {
    try {
        const user = await User.findById(req.user.userId)
            .populate({
                path: 'bookings',
                populate: [
                    { path: 'room', model: 'Room' },
                    { path: 'services', model: 'Service' }
                ]
            })
            .select('-password');  // Excluye la contraseña por seguridad
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

// Exporto las funciones
export { createUser, getAllUsers, getUserById, updateUser, deleteUser, login, getUserProfile}