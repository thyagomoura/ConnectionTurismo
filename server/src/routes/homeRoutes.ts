import {Request, Response, Router} from 'express';
import HomeController from '../controllers/homecontroller';

const homeController = new HomeController();

const homeRoutes = Router();

homeRoutes.get('/', (req: Request, res: Response) => {
    homeController.ping(req,res);
});

export default homeRoutes;