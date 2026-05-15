class Router {
    constructor() {
        this.routes = [];
    }

    static group(options, children = []) {
        const { prefix = '', middleware = [], roles = [] } = options;
        if (!children || (Array.isArray(children) && children.length === 0)) {
            const baseRoutePath = (prefix || '').replace(/\/+/g, '/') || '/';
            return [{
                path: baseRoutePath,
                middleware: middleware.length > 0 ? [...new Set(middleware)] : undefined,
                roles: roles.length > 0 ? [...new Set(roles)] : undefined
            }];
        }

        let childRoutes = typeof children === 'function' ? children() : children;
        if (!Array.isArray(childRoutes)) {
            childRoutes = [childRoutes];
        }
        return childRoutes.map(route => {
            if (!route) return null;
            if (Array.isArray(route)) {
                return Router.group(options, route);
            }
            const newPath = (prefix + (route.path || '')).replace(/\/+/g, '/') || '/';
            const newMiddleware = [...middleware, ...(route.middleware || [])];
            const newRoles = [...roles, ...(route.roles || [])];
            const finalRoute = {
                ...route,
                path: newPath,
                middleware: newMiddleware.length > 0 ? [...new Set(newMiddleware)] : undefined,
                roles: newRoles.length > 0 ? [...new Set(newRoles)] : undefined
            };
            if (Array.isArray(finalRoute.method)) {
                return finalRoute.method.map(m => ({ ...finalRoute, method: m }));
            }
            return finalRoute;
        }).filter(Boolean).flat(Infinity);
    }
}

export default Router;
