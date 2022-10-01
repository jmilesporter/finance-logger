import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';  
import {fileURLToPath} from 'url';



dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.get('/', (req: Request, res: Response) => {
  res.sendFile('/index.html' , { root : __dirname});
});

app.use(express.static( __dirname ));


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});