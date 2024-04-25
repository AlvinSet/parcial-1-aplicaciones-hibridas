import Room from '../models/roomModel.js';

// Crear una nueva habitacion
async function createRoom( req, res  ){
    try {
        const newRoom = new Room(req.body);
        await newRoom.save();

        res.status(201).json({ newRoom});

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error, data: []});
    }
}

// Obtener todos las habitaciones
async function getAllRooms  (req, res){
    try {
        const rooms = await Room.find();
        res.status(200).json({ message: 'Ok', data: rooms});
    } catch (error) {
        res.status(500).send({ message: error, data: []});
    }
};

//obtener una habitación por ID
async function getRoomById (req, res){
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).send("Room not found.")
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

//actualizar una habitación
async function updateRoom (req, res){
try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true } );
if (!room){
    return res.status(404).send("Room not found.")
}
res.status(200).json(room);

} catch (error) {
    res.status(400).send(error.message);
}
};

//Eliminar habitacion
async function deleteRoom (req, res){
    try {
        const room = await Room.findByIdAndDelete(req.params.id);
        if(!room){
            return res.status(404).send("Room not found.")
        }
        res.status(200).json("Room Deleted successfully.");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


// Exporto las funciones
export {createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom}