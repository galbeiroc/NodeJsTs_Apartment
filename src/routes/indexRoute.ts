import { Router } from 'express';

import { indexController } from '../controllers/indexController';

class IndexRouter {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/apartments', indexController.index);    
        this.router.post('/apartments', indexController.createApartment);
        this.router.put('/apartments/:id', indexController.updateAparment);
    }
}

const indexRouter = new IndexRouter();
export default indexRouter.router;