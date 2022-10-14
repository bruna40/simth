import express from 'express';
import ProductRouter from './routes/ProductRouter';
import UserRouter from './routes/UserRouter';
import OrderRouter from './routes/OrdersRouter';

const app = express();

app.use(express.json());
app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);

export default app;
