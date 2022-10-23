import express from 'express';
import ProductRouter from './routes/ProductRouter';
import UserRouter from './routes/UserRouter';
import OrderRouter from './routes/OrdersRouter';
// import LoginRouter from './routes/LoginRouter';

const app = express();

app.use(express.json());
app.use(ProductRouter);
app.use(UserRouter);
app.use(OrderRouter);
// app.use(LoginRouter);

export default app;
