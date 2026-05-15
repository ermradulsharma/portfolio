import Controller from '@/controllers/Controller';
import { userService } from '@/services/userService';
import { HTTP_STATUS } from '@/config/constants';

class UserController extends Controller {
    async index(req) {
        try {
            const data = await userService.getActiveUsers();
            return this.success(HTTP_STATUS.OK, "Active users directories synchronized", data);
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

const userController = new UserController();
export { userController };
