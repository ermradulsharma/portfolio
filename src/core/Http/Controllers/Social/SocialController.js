import Controller from '@/controllers/Controller';
import { socialService } from '@/services/socialService';
import { HTTP_STATUS } from '@/config/constants';

class SocialController extends Controller {
    async index(req) {
        try {
            const data = await socialService.getSocials();
            return this.success(HTTP_STATUS.OK, "Social channels successfully mapped", data);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async update(req) {
        try {
            const { id, ...updateData } = await req.json();
            
            if (!id) {
                return this.error(HTTP_STATUS.BAD_REQUEST, "Identifier required for update");
            }
            
            const updated = await socialService.updateSocial(id, updateData);
            if (!updated) {
                return this.error(HTTP_STATUS.NOT_FOUND, "Target resource is missing");
            }
            
            return this.success(HTTP_STATUS.OK, "Record mutated successfully", updated);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

const socialController = new SocialController();
export { socialController };
