import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {

    const url = '';

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
        .then(connection => {
            console.log('MongoDB connected')
        })
        .catch(error => {
            console.log('MongoDB failed to connect', error)
        })

    app.listen(5000, () => console.log('Nutri Api listening on port 5000'))
};

start();