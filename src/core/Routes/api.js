import Router from './Router';
import { projectController } from '@/controllers/Project/ProjectController';
import { categoryController } from '@/controllers/Category/CategoryController';
import { technologyController } from '@/controllers/Technology/TechnologyController';
import { blogController } from '@/controllers/Blog/BlogController';
import { userController } from '@/controllers/User/UserController';
import { socialController } from '@/controllers/Social/SocialController';
import { authController } from '@/controllers/Auth/AuthController';

const apiRoutes = [
    { method: 'POST', path: '/auth/login', handler: (req) => authController.handle(req) },
    ...Router.group({ prefix: '/admin', middleware: ['auth'] }, [
        { method: 'GET', path: '/projects', handler: (req) => projectController.index(req) },
        { method: 'POST', path: '/projects', handler: (req) => projectController.store(req) },
        { method: 'DELETE', path: '/projects/:id', handler: (req) => projectController.destroy(req) },
        { method: 'GET', path: '/categories', handler: (req) => categoryController.index(req) },
        { method: 'GET', path: '/technologies', handler: (req) => technologyController.index(req) },
        { method: 'GET', path: '/blogs', handler: (req) => blogController.index(req) },
        { method: 'GET', path: '/users', handler: (req) => userController.index(req) },
        { method: 'GET', path: '/socials', handler: (req) => socialController.index(req) },
        { method: 'PUT', path: '/socials', handler: (req) => socialController.update(req) },
    ]),
];

export default apiRoutes;
