import Blog from '@/core/Models/Blog';
import Category from '@/core/Models/Category';
import Technology from '@/core/Models/Technology';
import User from '@/core/Models/User';

export const blogService = {
    async getBlogs() {
        try {
            return await Blog.find({})
                .sort({ createdAt: -1 })
                .populate('categories', 'name icon')
                .populate('user', 'name');
        } catch (error) {
            console.warn("Blog query warning (DB offline/empty):", error.message);
            return [];
        }
    }
};

