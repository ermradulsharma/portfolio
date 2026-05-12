import User from '../../Models/User.js';
import { USER_ROLES, GENDER } from '../../Config/constants.js';

export const seedUsers = async () => {
    try {
        const seedData = [
            {
                name: process.env.ADMIN_NAME || 'Super Administrator',
                email: process.env.ADMIN_EMAIL,
                mobile: process.env.MOBILE || '9999999999',
                gender: GENDER.MALE,
                profile_pic: 'https://ui-avatars.com/api/?name=Super+Admin&background=random',
                is_active: true,
                password: process.env.ADMIN_PASSWORD,
                role: USER_ROLES.ADMIN,
                address: {
                    street: 'Administrative Office, Ring Road',
                    city: 'New Delhi',
                    state: 'Delhi',
                    pincode: '110001',
                    country: 'India',
                    latitude: 28.6139,
                    longitude: 77.2090,
                    point: {
                        type: 'Point',
                        coordinates: [77.2090, 28.6139]
                    }
                },
                date_of_birth: new Date('1994-07-18'),
                last_login_at: new Date(),
                created_by: null,
                deleted_at: null
            }
        ];

        let createdCount = 0;
        for (const account of seedData) {
            const exists = await User.findOne({ email: account.email });
            if (!exists) {
                await User.create(account);
                createdCount++;
            }
        }

        return { success: true, created: createdCount };
    } catch (error) {
        throw error;
    }
};

export default seedUsers;
