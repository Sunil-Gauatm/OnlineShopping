import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type : String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    },
    {
        timestamps: true
    }
)

export const UserModel = mongoose.model('User', userSchema);



   