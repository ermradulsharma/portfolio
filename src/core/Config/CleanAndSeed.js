import 'dotenv/config';
import mongoose from 'mongoose';
import dbConnect from './db.js';
import { seedUsers } from '../Database/Seeders/UserSeeder.js';
import { seedCategories } from '../Database/Seeders/CategorySeeder.js';
import { seedTechnologies } from '../Database/Seeders/TechnologySeeder.js';

const cleanAndSeed = async () => {
    try {
        await dbConnect();

        if (mongoose.connection.db) {
            await mongoose.connection.db.dropDatabase();
        }

        await seedCategories();

        await seedTechnologies();

        await seedUsers();

        process.exit(0);
    } catch (error) {
        process.exit(1);
    }
};
cleanAndSeed();
export default cleanAndSeed;
