import Technology from '@/core/Models/Technology';

export const technologyService = {
    async getTechnologies(categoryId = null) {
        let query = {};
        if (categoryId) {
            query.category = categoryId;
        }
        return await Technology.find(query).sort({ name: 1 });
    }
};
