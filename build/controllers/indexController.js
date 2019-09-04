"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Apartment  from '../Model/apartment';
const Apartment = require('../Model/apartment');
class IndexController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aparments = yield Apartment.find();
            res.json(aparments);
        });
    }
    createApartment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numApartment, meter, price } = req.body;
            const newApartment = new Apartment({
                numApartment,
                meter,
                price
            });
            yield newApartment.save();
            console.log(newApartment);
            res.json({ message: 'Aparment Saved' });
            res.redirect('/');
        });
    }
    updateAparment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numApartment, meter, price } = req.body;
            yield Apartment.findByIdAndUpdate(req.params.id, {
                numApartment,
                meter,
                price
            });
            res.json({ message: 'Aparment Updated' });
            res.redirect('/');
        });
    }
}
exports.indexController = new IndexController();
