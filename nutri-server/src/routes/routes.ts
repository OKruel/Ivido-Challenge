import express from 'express';
// import { body } from 'express-validator';
// import { validateRequest } from '../middlewares/validate-request';
import { saveMealDB } from '../controllers/saveMeal';
import { getAllMeals } from '../controllers/getAllMeals';
import { updateMeal } from '../controllers/updateMeals';
import { deleteMeal } from '../controllers/deleteMeals';

const router = express.Router();

router.route('/nutrition')
    .post(saveMealDB)
    .get(getAllMeals)

router.route('/nutrition/:id')
    .put(updateMeal)
    .delete(deleteMeal)


export { router as nutritionRoutes }

