import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Service name is required"]
    },
    description: {
        type: String,
        required: [true, "Service description is required"]
    },
    price: {
        type: Number,
        required: [true, "Service price is required"]
    },
    available: {
        type: Boolean,
        default: true
    }
    }, { timestamps: true });

    const Service = mongoose.model('Service', serviceSchema);
    export default Service;