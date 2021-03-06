import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointment', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/session', sessionsRouter);

export default routes;
