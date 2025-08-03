import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET_KEY = process.env.JWTSECRETKEY;

export const JwtTokenCheck = (req , res, next) =>{
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }
        req.user = decoded; // Attach user info to request
        next(); // Proceed to the next middleware or route handler
    });
}