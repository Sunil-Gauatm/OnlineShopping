import { UserModel } from '../Model/User.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../config/jwtTokenGenerator.js';

export const Loginuser = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User Credentails doesnt match" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const { password: _, ...userData } = user._doc;
        // Exclude password from the response
        const token = generateToken(user);
        return res.status(200).json({ message: "Login successful", user: userData, token });


    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });

    }

}

export const RegisterUser = async (req, res) => {
    const { fullname, email, password, role } = req.body;

    if (!fullname || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    // Check if user already exists
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const hashedpassword = await bcrypt.hash(password, 10);

    if (!hashedpassword) {
        return res.status(500).json({ message: "Error hashing password" });
    }

    const user = await UserModel.create({
        fullname,
        email,
        password: hashedpassword,
        role: role || 'user'

    })
    return res.status(201).json({ message: "User registered successfully", user });



}
