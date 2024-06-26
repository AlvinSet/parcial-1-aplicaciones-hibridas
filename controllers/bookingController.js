import Booking from '../models/bookingModel.js';
import Room from '../models/roomModel.js';

// Crear una nueva reserva
async function createBooking( req, res  ){
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();

        res.status(201).json({ newBooking});

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error, data: []});
    }
}

// Obtener todos las reservas
async function getAllBookings  (req, res){
    try {
        const bookings = await Booking.find();
        res.status(200).json({ message: 'Ok', data: bookings});
    } catch (error) {
        res.status(500).send({ message: error, data: []});
    }
};

//obtener una reserva por ID
async function getBookingById (req, res){
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).send("Booking not found.")
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

//actualizar una reserva
async function updateBooking (req, res){
try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true } );
if (!booking){
    return res.status(404).send("Booking not found.")
}
res.status(200).json(booking);

} catch (error) {
    res.status(400).send(error.message);
}
};

//Eliminar reserva
async function deleteBooking (req, res){
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if(!booking){
            return res.status(404).send("Booking not found.")
        }
        res.status(200).json("Booking Deleted successfully.");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


// Exporto las funciones
export {createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking}