"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const apartmSchema = new Schema({
    numApartment: { type: String, required: true },
    meter: { type: Number, required: true },
    price: { type: Number, required: true }
});
module.exports = mongoose_1.default.model('Apartment', apartmSchema);
