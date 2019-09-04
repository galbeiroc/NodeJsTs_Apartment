"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
const URI = 'mongodb://localhost/aparments-db-app';
mongoose_1.default.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is Connect'))
    .catch(err => console.log('Error to Connect: ', err));
