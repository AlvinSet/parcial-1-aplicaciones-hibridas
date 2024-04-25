import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    number: {
        type: String,
        required: [true, "Room number is required"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "Room type is required"],
        enum: ['single', 'double', 'suite', 'family'],
    },
    pricePerNight: {
        type: Number,
        required: [true, "Price per night is required"]
    },
    availability: {
        type: Boolean,
        required: true,
        default: true
    },
    amenities: [String]
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);
export default Room;