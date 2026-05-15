import Blog from '@/core/Models/Blog';

export const blogService = {
    async getBlogs() {
        return await Blog.find({})
            .sort({ createdAt: -1 })
            .populate('categories', 'name icon');
    }
};
