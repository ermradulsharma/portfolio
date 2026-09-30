import Blog from '@/core/Models/Blog';
import Category from '@/core/Models/Category';
import Technology from '@/core/Models/Technology';
import User from '@/core/Models/User';

export const blogService = {
    async getBlogs() {
        return await Blog.find({})
            .sort({ createdAt: -1 })
            .populate('categories', 'name icon')
            .populate('user', 'name');
    }
};
