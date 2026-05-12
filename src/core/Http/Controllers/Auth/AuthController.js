import Controller from '@/controllers/Controller';
import { authService } from '@/services/authService';
import { HTTP_STATUS, AUTH_CONFIG, RESPONSE_MESSAGES } from '@/config/constants';

class AuthController extends Controller {
    async handle(req) {
        try {
            const { email, password } = await req.json();
            const { token, user } = await authService.login(email, password);
            const response = this.success(HTTP_STATUS.OK, RESPONSE_MESSAGES.AUTH.SUCCESS, { token, user });
            response.headers.append('Set-Cookie', `${AUTH_CONFIG.COOKIE_NAME}=${token}; HttpOnly; Path=/; Max-Age=${AUTH_CONFIG.MAX_AGE_SECONDS}; SameSite=Strict; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''}`);
            return response;
        } catch (error) {
            return this.error(HTTP_STATUS.UNAUTHORIZED, error.message || RESPONSE_MESSAGES.AUTH.FAILED);
        }
    }
}
const authController = new AuthController();
export { authController };
