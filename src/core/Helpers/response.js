import { HTTP_STATUS } from '@/config/constants';
export function successResponse(status = HTTP_STATUS.OK, message = "Success", data = {}, headers = {}) {
    return new Response(JSON.stringify({ status, success: true, message, data }), {
        headers: { 'Content-Type': 'application/json', ...headers }
    });
}

export function errorResponse(status = HTTP_STATUS.BAD_REQUEST, message = "Error", data = {}, headers = {}) {
    return new Response(JSON.stringify({ status, success: false, message, data }), {
        headers: { 'Content-Type': 'application/json', ...headers }
    });
}

const responses = { successResponse, errorResponse };
export default responses;
