import Category from '@/core/Models/Category';

export const categoryService = {
    async getCategories() {
        return await Category.find({}).sort({ name: 1 });
    }
};
