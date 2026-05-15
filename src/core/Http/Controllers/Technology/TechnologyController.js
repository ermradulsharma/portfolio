import Controller from '@/controllers/Controller';
import { technologyService } from '@/services/technologyService';
import { HTTP_STATUS } from '@/config/constants';

class TechnologyController extends Controller {
    async index(req) {
        try {
            const { searchParams } = new URL(req.url);
            const categoryId = searchParams.get('categoryId');
            
            const data = await technologyService.getTechnologies(categoryId);
            return this.success(HTTP_STATUS.OK, "Technologies loaded successfully", data);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

const technologyController = new TechnologyController();
export { technologyController };
