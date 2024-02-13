import { Router } from 'express';
import userRouters from './routers/users/UserRouters';
import publicationRouters from './routers/publication/PublicationRouters';


const routes = Router();
routes.use('/user', userRouters)
routes.use('/publication', publicationRouters)



export default routes;
