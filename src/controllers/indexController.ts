import { Request, Response } from 'express';

//import Apartment  from '../Model/apartment';
const Apartment = require('../Model/apartment');

class IndexController {
    public async index (req: Request, res: Response) {
        const aparments = await Apartment.find();
        res.json(aparments);
    }

    public async createApartment (req: Request,  res: Response) {
        const { numApartment, meter, price } = req.body;
        const newApartment = new Apartment({
            numApartment,
            meter,
            price
        });
        await newApartment.save();
        console.log(newApartment);
        res.json({message: 'Aparment Saved'});
        res.redirect('/');
    }

    public async updateAparment (req: Request, res: Response) {
        const { numApartment, meter, price } = req.body;
        await Apartment.findByIdAndUpdate(req.params.id, {
            numApartment,
            meter,
            price        
        });
        res.json({message: 'Aparment Updated'});
        res.redirect('/');
    }


}


export const indexController = new IndexController();