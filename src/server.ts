import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

const {NODE_ENV} = process.env;
if (NODE_ENV !== 'prod') {
    const __dirname = path.resolve();
    dotenv.config({path: path.join(__dirname, '.env')})
}

import logger from './loaders/logger';
import loaders from './loaders';

const startServer = async () => {
    const app = express();
    const PORT = process.env.PORT || 8888;
    console.log(process.env.PORT);

    await loaders({app});

    app.listen(PORT, () => {
        logger.info(`🚀 Server listening on port: ${PORT} 🚀`);
    });
};

startServer();
