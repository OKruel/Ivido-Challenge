import { Request, Response, NextFunction } from 'express';
import { Meals } from '../models/mealsModel';

const saveMealDB = async (req: Request, res: Response, next: NextFunction) => {

    console.log(req.body);
    
    if (!req.body) {
        throw new Error('Bad Request!')
    }

    const meal = req.body && Meals.build({
        type: req.body.type,
        name: req.body.name,
        calories: req.body.calories
    });

    await meal.save();

    res.send(req.body)
}
export { saveMealDB };