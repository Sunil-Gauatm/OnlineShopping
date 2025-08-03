import express from 'express';
import { Loginuser } from '../Controller/auth.contoller.js';
import { RegisterUser } from '../Controller/auth.contoller.js';
import { ProductController } from '../Controller/product.js';
import { JwtTokenCheck } from '../Middleware/JwtTokenCheck.middleware.js';

const router = express.Router();

router.post('/login', Loginuser)
router.post('/Register',RegisterUser);


export default router;