import dbConnect from '@/config/db';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development_purposes';
const JWT_EXPIRE = '24h';

export const authService = {
    async login(email, password) {
        await dbConnect();

        if (!email || !password) {
            throw new Error('Please provide both email and password');
        }

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
            expiresIn: JWT_EXPIRE,
        });

        return {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        };
    }
};
