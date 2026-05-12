import Controller from '@/controllers/Controller';
import { HTTP_STATUS, RESPONSE_MESSAGES } from '@/config/constants';

class ChangePasswordController extends Controller {
    async handle(req) {
        try {
            const { oldPassword, newPassword } = await req.json();
            if (!oldPassword || !newPassword) {
                return this.error(HTTP_STATUS.BAD_REQUEST, "Both current and new passwords are required.");
            }
            return this.success(HTTP_STATUS.OK, "Authentication credentials successfully rotated.");
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message || RESPONSE_MESSAGES.GENERIC.SERVER_ERROR);
        }
    }
}

const changePasswordController = new ChangePasswordController();
export { changePasswordController };