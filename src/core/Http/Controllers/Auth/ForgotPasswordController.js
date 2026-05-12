import Controller from '@/controllers/Controller';
import { HTTP_STATUS, RESPONSE_MESSAGES } from '@/config/constants';

class ForgotPasswordController extends Controller {
    async handle(req) {
        try {
            const { email } = await req.json();
            if (!email) {
                return this.error(HTTP_STATUS.BAD_REQUEST, "Please provide a valid registered email address.");
            }
            return this.success(HTTP_STATUS.OK, "If your account exists, a password reset link has been dispatched securely.", { email });
        } catch (error) {
            return this.error(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message || RESPONSE_MESSAGES.GENERIC.SERVER_ERROR);
        }
    }
}

const forgotPasswordController = new ForgotPasswordController();
export { forgotPasswordController };
