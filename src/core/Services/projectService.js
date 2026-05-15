import Project from '@/core/Models/Project';

export const projectService = {
    async getProjects() {
        return await Project.find({})
            .sort({ createdAt: -1 })
            .populate('category', 'name icon')
            .populate('technologies', 'name icon')
            .populate('user', 'name');
    },

    async createProject(data) {
        return await Project.create(data);
    },

    async deleteProject(id) {
        return await Project.findByIdAndDelete(id);
    }
};
