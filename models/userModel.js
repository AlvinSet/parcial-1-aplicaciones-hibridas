import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        match: [/^\+?(\d{1,3})?[-.\s]?\(?(?:\d{1,3})\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/, 'Please fill a valid phone number'],
        unique: true,
        minlength: [10, "Phone number cannot be shorter than 10 digits"],
        maxlength: [15, "Phone number cannot exceed 15 digits"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    }]
})


const User = mongoose.model('User', userSchema);

export default User;