import { Request, Response, NextFunction } from 'express';
import { Meals } from '../models/mealsModel';

const getAllMeals = async (req: Request, res: Response, next: NextFunction) => {
    const meal = await Meals.find();
    res.send(meal);
};

export { getAllMeals };