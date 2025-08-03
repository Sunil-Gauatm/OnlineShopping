import mongoose from "mongoose";


export const connection = await mongoose.connect('mongodb://localhost:27017/test').then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection failed", err);
});