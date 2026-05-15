import Controller from '@/controllers/Controller';
import { categoryService } from '@/services/categoryService';
import { HTTP_STATUS } from '@/config/constants';

class CategoryController extends Controller {
    async index(req) {
        try {
            const data = await categoryService.getCategories();
            return this.success(HTTP_STATUS.OK, "Categories populated", data);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

const categoryController = new CategoryController();
export { categoryController };
