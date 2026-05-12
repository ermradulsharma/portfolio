export const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user',
};

export const GENDER = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other'
};

export const AUTH_CONFIG = {
    COOKIE_NAME: 'admin_token',
    JWT_EXPIRY: '24h',
    MAX_AGE_SECONDS: 60 * 60 * 24,
};

export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

export const RESPONSE_MESSAGES = {
    AUTH: {
        SUCCESS: 'Authentication Successful',
        FAILED: 'Invalid Credentials',
        MISSING_TOKEN: 'Missing access token',
        EXPIRED_TOKEN: 'Session has expired'
    },
    GENERIC: {
        SERVER_ERROR: 'Internal Server Error encountered'
    }
};
