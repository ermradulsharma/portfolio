import { successResponse, errorResponse } from '@/helpers/response';

class Controller {
    success(status, message, data = null) {
        return successResponse(status, message, data);
    }

    error(status, message, errors = null) {
        return errorResponse(status, message, errors);
    }
}

export default Controller;
