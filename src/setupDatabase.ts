import mongoose, { mongo } from "mongoose";

export default () => {
    const connect = () => {
        mongoose.connect('mongodb://localhost:27017/atelier_chat')
        .then(() => {
            console.log('Successfully connected to database.')
        })
        .catch((error) => {
            console.log('Error connecting to database', error);
            return process.exit(1);
        })
    };
    connect();

    // if disconnected, retry to connect
    // otherwise show errors on the log
    mongoose.connection.on('disconnected', connect);
};