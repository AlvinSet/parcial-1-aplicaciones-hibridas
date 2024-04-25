import express from 'express';
import usersRouter from './usersRouter.js';
import servicesRouter from './servicesRouter.js';
import roomsRouter from './roomsRouter.js';
import bookingsRouter from './bookingsRouter.js';





const router = express.Router();

router.use('/users', usersRouter);
router.use('/services', servicesRouter);
router.use('/rooms', roomsRouter);
router.use('/bookings', bookingsRouter);


export default router;

