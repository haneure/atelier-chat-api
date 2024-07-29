import express, { Express } from 'express';
import dbConn from './setupDatabase';
import { ChatServer } from './setupServer';

class Application {
    public initialize(): void {
        dbConn();
        const app: Express = express();
        const server: ChatServer = new ChatServer(app)

        server.start();
    }    
}

const application: Application = new Application();
application.initialize();