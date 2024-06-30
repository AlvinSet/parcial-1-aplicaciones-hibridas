import Booking from '../models/bookingModel.js';
import Room from '../models/roomModel.js';
import User from '../models/userModel.js';
import Service from '../models/serviceModel.js';

// Crear una nueva reserva
async function createBooking(req, res) {
    try {
        const { roomId, startDate, endDate, services, totalPrice } = req.body;
        const client = req.user.userId; // Extrae el ID del usuario del token

        console.log('Received Data:', { client, roomId, startDate, endDate, services, totalPrice });

        // Verificar si la habitación existe
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        // Verificar si el cliente existe
        const user = await User.findById(client);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verificar si los servicios existen
        const serviceList = await Service.find({ '_id': { $in: services } });
        if (serviceList.length !== services.length) {
            return res.status(404).json({ message: "One or more services not found" });
        }

        // Crear una nueva reserva
        const newBooking = new Booking({
            client,
            room: roomId,
            services,
            startDate,
            endDate,
            totalPrice
        });

        await newBooking.save();

        user.bookings.push(newBooking._id);
        await user.save();

        res.status(201).json(newBooking);

    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(400).json({ message: "Error creating booking", error });
    }
}

// Obtener todas las reservas
async function getAllBookings(req, res) {
    try {
        const bookings = await Booking.find()
            .populate('client', 'name email')
            .populate('room', 'number type')
            .populate('services', 'name price');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).send({ message: error, data: [] });
    }
}

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
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('client room services');
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