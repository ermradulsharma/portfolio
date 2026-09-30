import Project from '@/core/Models/Project';
import Category from '@/core/Models/Category';
import Technology from '@/core/Models/Technology';
import User from '@/core/Models/User';

export const projectService = {
    async getProjects() {
        try {
            return await Project.find({})
                .sort({ createdAt: -1 })
                .populate('category', 'name icon')
                .populate('technologies', 'name icon')
                .populate('user', 'name');
        } catch (error) {
            console.warn("Project query warning (DB offline/empty):", error.message);
            return [];
        }
    },

    async createProject(data) {
        return await Project.create(data);
    },

    async deleteProject(id) {
        return await Project.findByIdAndDelete(id);
    }
};

