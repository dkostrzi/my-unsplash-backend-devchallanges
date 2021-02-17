import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
import cors from 'cors';

import photoRoutes from './routes/Photos.route';
import mainRoute from './routes/Main.route';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//TODO: cors config
app.use(cors());
photoRoutes(app);
mainRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
