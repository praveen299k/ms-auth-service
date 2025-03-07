import app from './app';
import { Config } from './config';
import logger from './config/logger';

const createServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.info('SERVER RUNNING ON PORT', { port: PORT });
        });
    } catch (err) {
        console.error(err);
    }
};

createServer();
