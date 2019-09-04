import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoute from './routes/indexRoute';
require('./database');

class Server {

    public app:Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void {
        this.app.set('port', process.env.PORT || 3100);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use('/', indexRoute);
    }

    start(): void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on Port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();