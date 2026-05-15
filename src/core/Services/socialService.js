import Social from '@/core/Models/Social';

export const socialService = {
    async getSocials() {
        return await Social.find({}).sort({ name: 1 });
    },

    async updateSocial(id, updateData) {
        return await Social.findByIdAndUpdate(id, updateData, { new: true });
    }
};
