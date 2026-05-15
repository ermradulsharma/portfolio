import Controller from '@/controllers/Controller';
import { projectService } from '@/services/projectService';
import { HTTP_STATUS } from '@/config/constants';

class ProjectController extends Controller {
    async index(req) {
        try {
            const data = await projectService.getProjects();
            return this.success(HTTP_STATUS.OK, "Projects retrieved successfully", data);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async store(req) {
        try {
            const body = await req.json();
            const { user, category, title, description } = body;
            
            if (!user || !category || !title || !description) {
                return this.error(HTTP_STATUS.BAD_REQUEST, "Mandatory validation fields missing");
            }
            
            const newProject = await projectService.createProject(body);
            return this.success(HTTP_STATUS.CREATED, "Project successfully cataloged", newProject);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async destroy(req) {
        try {
            const { searchParams } = new URL(req.url);
            const id = req.params?.id || searchParams.get('id');
            
            if (!id) {
                return this.error(HTTP_STATUS.BAD_REQUEST, "Required dynamic target ID is absent");
            }
            
            const deleted = await projectService.deleteProject(id);
            if (!deleted) {
                return this.error(HTTP_STATUS.NOT_FOUND, "Entity target not found in records");
            }
            
            return this.success(HTTP_STATUS.OK, "Entity wiped successfully");
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

const projectController = new ProjectController();
export { projectController };
