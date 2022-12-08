import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import BossParkingController from './controllers/BossParkingController';
import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

routes.get('/bossparking', BossParkingController.index);
routes.get('/bossparking/:id', BossParkingController.show);
routes.post('/bossparking', BossParkingController.create);

export default routes;