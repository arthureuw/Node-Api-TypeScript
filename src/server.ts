import express from 'express';
import path from 'path';

import logger from './loaders/logger';
import loaders from './loaders';

const { NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
    require('dotenv').config()
}


const startServer = async () => {
    const app = express();
    const PORT = process.env.PORT || 8888;

    await loaders({ app });

    app.listen(PORT, () => {
        logger.info(`🚀 Server listening on port: ${PORT} 🚀`);
    });
};

startServer();
