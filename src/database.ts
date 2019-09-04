//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const URI = 'mongodb+srv://galbeiroc:Caracol2008@cluster0-hd7he.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('DB is Connect'))
.catch(err => console.log('Error to Connect: ',err));