import Router from './Router';
const webRoutes = [
    { path: '/', middleware: [] },
    ...Router.group({ middleware: ['guest'] }, [{ path: '/login' }, { path: '/register' }]),
    ...Router.group({ prefix: '/admin', middleware: ['auth'] }),
    ...Router.group({ prefix: '/admin/project', middleware: ['auth'] }),
    ...Router.group({ prefix: '/admin/category', middleware: ['auth'] }),
    ...Router.group({ prefix: '/admin/technology', middleware: ['auth'] }),
    ...Router.group({ prefix: '/admin/blog', middleware: ['auth'] }),
    ...Router.group({ prefix: '/admin/user', middleware: ['auth'] }),
    ...Router.group({ prefix: '/admin/social', middleware: ['auth'] }),
];

export default webRoutes;
