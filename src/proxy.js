import { NextResponse } from 'next/server';
import webRoutes from '@/routes/web';
import authMiddleware from '@/middleware/auth';
import guestMiddleware from '@/middleware/guest';

const MIDDLEWARE_REGISTRY = {
    auth: authMiddleware,
    guest: guestMiddleware
};
function getActiveRouteConfig(pathname) {
    const pathClean = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const matches = webRoutes.filter(r => {
        if (r.path === '/') return pathClean === '/';
        return pathClean === r.path || pathClean.startsWith(r.path + '/');
    });
    return matches.sort((a, b) => b.path.length - a.path.length)[0] || null;
}
export async function proxy(request) {
    const { pathname } = request.nextUrl;
    if (
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/api/') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }
    const configDefinition = getActiveRouteConfig(pathname);
    const middlewarePipeline = configDefinition?.middleware || (pathname.startsWith('/admin') ? ['auth'] : []);
    for (const middlewareKey of middlewarePipeline) {
        const executionFunction = MIDDLEWARE_REGISTRY[middlewareKey];
        if (!executionFunction) continue;
        const actionableResponse = await executionFunction(request);
        if (actionableResponse) {
            return actionableResponse;
        }
    }
    return NextResponse.next();
}
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|images/).*)',
    ],
};
