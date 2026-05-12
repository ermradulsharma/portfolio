/**
 * Router utility for grouping routes with common prefixes and middleware.
 * Replicated from your enterprise travel architecture!
 */
class Router {
    constructor() {
        this.routes = [];
    }

    /**
     * Create a group of routes
     * @param {Object} options - { prefix, middleware, roles }
     * @param {Array|Function} children - Child routes
     * @returns {Array} - Flattened routes
     */
    static group(options, children) {
        const { prefix = '', middleware = [], roles = [] } = options;
        let childRoutes = typeof children === 'function' ? children() : children;

        // Ensure childRoutes is an array
        if (!Array.isArray(childRoutes)) {
            childRoutes = [childRoutes];
        }

        return childRoutes.map(route => {
            // Handle nested groups (which are already arrays)
            if (Array.isArray(route)) {
                return Router.group(options, route);
            }

            // Basic structural check, normalize strings if present
            const rawPath = typeof route === 'string' ? route : (route.path || '');
            
            // Combine Prefixes
            const newPath = (prefix + rawPath).replace(/\/+/g, '/') || '/';
            
            // Consolidate middleware lists
            const routeMiddleware = typeof route === 'object' ? (route.middleware || []) : [];
            const newMiddleware = [...middleware, ...routeMiddleware];

            // Consolidate roles
            const routeRoles = typeof route === 'object' ? (route.roles || []) : [];
            const newRoles = [...roles, ...routeRoles];

            return {
                path: newPath,
                middleware: newMiddleware.length > 0 ? [...new Set(newMiddleware)] : [],
                roles: newRoles.length > 0 ? [...new Set(newRoles)] : []
            };
        }).flat(Infinity);
    }
}

export default Router;
