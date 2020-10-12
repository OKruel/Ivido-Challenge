import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { nutritionRoutes } from './routes/routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(nutritionRoutes);


export { app };