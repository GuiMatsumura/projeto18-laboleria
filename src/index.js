import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';

import router from './routes/routesIndex.js';

dotenv.config();
const app = express();
app.use(cors(), express.json());

app.use(router);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(
    chalk.hex('#00ffff').bold(`Server is running on: http://localhost:${PORT}`)
  );
});
