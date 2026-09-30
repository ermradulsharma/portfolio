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

    async update(req) {
        try {
            const body = await req.json();
            const { id, ...updateData } = body;
            if (!id) {
                return this.error(HTTP_STATUS.BAD_REQUEST, "Category ID is required for update");
            }
            const updated = await categoryService.updateCategory(id, updateData);
            if (!updated) {
                return this.error(HTTP_STATUS.NOT_FOUND, "Category not found");
            }
            return this.success(HTTP_STATUS.OK, "Category updated successfully", updated);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async destroy(req) {
        try {
            const { searchParams } = new URL(req.url);
            const id = req.params?.id || searchParams.get('id');
            if (!id) {
                return this.error(HTTP_STATUS.BAD_REQUEST, "Category ID required");
            }
            const deleted = await categoryService.deleteCategory(id);
            if (!deleted) {
                return this.error(HTTP_STATUS.NOT_FOUND, "Category not found");
            }
            return this.success(HTTP_STATUS.OK, "Category deleted successfully");
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

const categoryController = new CategoryController();
export { categoryController };
