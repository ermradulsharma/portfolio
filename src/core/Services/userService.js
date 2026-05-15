import User from '@/core/Models/User';

export const userService = {
    async getActiveUsers() {
        return await User.find({ is_active: true, deleted_at: null })
            .select('name email role');
    }
};
