import app from './app';
import { Config } from './config';

const createServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};

createServer();
