import Router from './Router';

/**
 * Define Web Application Routes utilizing standard Laravel-style grouping.
 */
const webRoutes = [
    // --- Public Route Definitions ---
    { path: '/', middleware: [] },

    // --- Auth Route Definitions ---
    ...Router.group({ middleware: ['guest'] }, [
        { path: '/login' },
        { path: '/register' },
    ]),

    // --- Admin Panel Governance (Protected) ---
    ...Router.group({ prefix: '/admin', middleware: ['auth'] }, [
        { path: '/' },
        { path: '/dashboard' },
        { path: '/users' },
        { path: '/settings' },
        // Add infinite nested routes here instantly protected!
    ])
];

export default webRoutes;
