import { Request, Response, NextFunction } from 'express';
import { Meals } from '../models/mealsModel';

const deleteMeal = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    req.params = { _id: req.params.id }
    const deletedMeal = await Meals.findByIdAndDelete(req.params)

    res.send(deletedMeal)
}

export { deleteMeal };