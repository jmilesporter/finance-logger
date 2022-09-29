import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.sendFile('/index.html' , { root : __dirname });
});

app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});