import express from 'express';
import './database/conection';
import 'express-async-errors'
import routes from './routes';
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes);
const port = process.env.PORT || 3333;
app.listen(port, () => {
   console.log(
    `Running on host: ${process.env.PORT || "http://localhost:3333"}`
  );
});
