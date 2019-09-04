"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/apartments', indexController_1.indexController.index);
        this.router.post('/apartments', indexController_1.indexController.createApartment);
        this.router.put('/apartments/:id', indexController_1.indexController.updateAparment);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
