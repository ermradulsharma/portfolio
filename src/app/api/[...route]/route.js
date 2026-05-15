import { NextResponse } from 'next/server';
import routesImport from '@/core/Routes/api.js';
import dbConnect from '@/core/Config/db';
import jwt from 'jsonwebtoken';
import { errorResponse } from '@/helpers/response';
import { HTTP_STATUS } from '@/config/constants';

export const dynamic = 'force-dynamic';

const routes = Array.isArray(routesImport) ? routesImport : (routesImport.default || []);

function findRoute(method, slug) {
    const path = '/' + slug.join('/').replace(/\/$/, '');
    for (const route of routes) {
        if (route.method.toUpperCase() !== method.toUpperCase()) continue;
        const routePath = route.path.replace(/\/$/, '');
        const paramNames = [];
        const regexPath = routePath.replace(/:([^/]+)/g, (_, paramName) => {
            paramNames.push(paramName);
            return '([^/]+)';
        });
        const regex = new RegExp(`^${regexPath}$`);
        const match = path.match(regex);
        if (match) {
            const params = { ...(route.params || {}) };
            paramNames.forEach((name, index) => {
                params[name] = match[index + 1];
            });
            return { routeDef: route, params };
        }
    }
    return null;
}

async function handler(req, { params }) {
    try {
        await dbConnect();
        const { route: slug } = await params;
        const method = req.method;
        const match = findRoute(method, slug);
        
        if (!match) {
            return errorResponse(HTTP_STATUS.NOT_FOUND, `API Endpoint Route Not Found`, { method, path: '/' + slug.join('/') });
        }
        
        const { routeDef, params: routeParams } = match;
        
        if (routeDef.middleware && routeDef.middleware.includes('auth')) {
            const tokenCookie = req.cookies.get('admin_token');
            const token = tokenCookie?.value || null;
            
            if (!token) {
                return errorResponse(HTTP_STATUS.UNAUTHORIZED, "Unauthorized Access. Token required.");
            }
            
            try {
                req.user = jwt.verify(token, process.env.JWT_SECRET);
            } catch (jwtErr) {
                return errorResponse(HTTP_STATUS.UNAUTHORIZED, "Access Blocked. Invalid session identifier.");
            }
        }
        
        req.params = routeParams;
        return await routeDef.handler(req);
        
    } catch (error) {
        return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, "Universal gateway encountered a severe dispatch failure.", { exception: error.message });
    }
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
