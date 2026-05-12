import 'dotenv/config';
import mongoose from 'mongoose';
import dbConnect from './db.js';
import { seedUsers } from '../Database/Seeders/UserSeeder.js';

const cleanAndSeed = async () => {
    try {
        await dbConnect();
        if (mongoose.connection.db) {
            await mongoose.connection.db.dropDatabase();
        }
        await seedUsers();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
cleanAndSeed();
export default cleanAndSeed;
