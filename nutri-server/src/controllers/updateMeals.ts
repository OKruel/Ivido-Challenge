import { Request, Response, NextFunction } from 'express';
import { Meals } from '../models/mealsModel';

const updateMeal = async (req: Request, res: Response, next: NextFunction) => {
    req.params = { _id: req.params.id }
    const updateMeal = await Meals.findById(req.params);

    if (!updateMeal) {
        throw new Error('Product not found in database');
    }

    await updateMeal.set({
        type: req.body.type,
        name: req.body.name,
        calories: req.body.calories
    }).save()

    res.send(updateMeal);
}

export { updateMeal };