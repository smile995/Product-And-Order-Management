import express, { Application, Request, Response } from 'express';
import cors from "cors";
import { productRouter } from './Product/product.router';
import { orderRouter } from './OrderManagement/order.route';
const app: Application = express()
const port = 3000

//parsers
app.use(express.json());
app.use(cors());

app.use("/api/products",productRouter);
app.use('/api/orders',orderRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!!')
})

export default app;