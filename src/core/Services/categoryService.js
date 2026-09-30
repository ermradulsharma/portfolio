import Category from '@/core/Models/Category';

export const categoryService = {
    async getCategories() {
        return await Category.find({}).sort({ name: 1 });
    },

    async updateCategory(id, data) {
        return await Category.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    },

    async deleteCategory(id) {
        return await Category.findByIdAndDelete(id);
    }
};
