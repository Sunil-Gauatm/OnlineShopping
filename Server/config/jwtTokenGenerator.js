import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET_KEY = process.env.JWTSECRETKEY;

export const generateToken = (user) => {
   return  jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        JWT_SECRET_KEY,
        { expiresIn: '1d' }
    )
}