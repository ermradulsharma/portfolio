import { authController } from '@/controllers/Auth/AuthController';

/**
 * @POST Endpoint handler for authenticating administrative portal credentials
 */
export async function POST(request) {
  return await authController.handleLogin(request);
}
