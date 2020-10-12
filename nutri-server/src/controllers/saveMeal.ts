import { Request, Response, NextFunction } from 'express';
import { Meals } from '../models/mealsModel';

const saveMealDB = async (req: Request, res: Response, next: NextFunction) => {

    if (!req.body) {
        throw new Error('Bad Request!')
    }

    const meal = req.body && Meals.build({
        type: req.body.type,
        name: req.body.name,
        carbohydrate: req.body.carbohydrate,
        protein: req.body.protein,
        sugar: req.body.sugar,
        fat: req.body.fat
    });

    await meal.save();

    res.send(req.body)
}
export { saveMealDB };