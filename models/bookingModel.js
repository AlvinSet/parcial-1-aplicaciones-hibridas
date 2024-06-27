import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Client is required"]
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: [true, "Room is required"]
    },
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }],
    startDate: {
        type: Date,
        required: [true, "Start date is required"]
    },
    endDate: {
        type: Date,
        required: [true, "End date is required"]
    },
    totalPrice: {
        type: Number,
        required: [true, "Total price is required"]
    },
    status: {
        type: String,
        enum: ['booked', 'cancelled', 'completed'],
        default: 'booked'
    }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;