import Controller from '@/controllers/Controller';
import { blogService } from '@/services/blogService';
import { HTTP_STATUS } from '@/config/constants';

class BlogController extends Controller {
    async index(req) {
        try {
            const data = await blogService.getBlogs();
            return this.success(HTTP_STATUS.OK, "Blogs fetched successfully", data);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

const blogController = new BlogController();
export { blogController };
