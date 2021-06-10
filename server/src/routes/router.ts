import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';


const router = Router();

router.use('/', homeRoutes);

export default router;