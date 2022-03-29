import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import * as middlewares from './middlewares';
// import routeOrder from './middlewares/routeOrder';
// import routeProduct from './middlewares/routeProduct';
// import routeUser from './middlewares/routeUser';

const app = express();

app.use(express.json());

app.use('/products', middlewares.routeProduct);
app.use('/users', middlewares.routeUser);
app.use('/orders', middlewares.routeOrder);
app.use(middlewares.errorMiddleware);

export default app;
