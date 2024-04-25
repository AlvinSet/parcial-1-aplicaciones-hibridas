import express from 'express';
import usersRouter from './usersRouter.js'
import servicesRouter from './servicesRouter.js'



const router = express.Router();

router.use('/users', usersRouter);
router.use('/services', servicesRouter);

export default router;

