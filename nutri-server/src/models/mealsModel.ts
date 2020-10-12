import mongoose, { mongo } from 'mongoose';

enum mealType {
    breakfast = 'breakfast',
    lunch = 'lunch',
    snack = 'snack',
    dinner = 'dinner'
};

interface MealAttr {
    name: string;
    type: mealType;
    fat: number;
    sugar: number;
    carbohydrate: number;
    protein: number;
};

interface MealDocument extends mongoose.Document {
    name: string;
    type: mealType;
    fat: number;
    sugar: number;
    carbohydrate: number;
    protein: number;
}

interface MealModel extends mongoose.Model<MealDocument> {
    build(attributes: MealAttr): MealDocument;
}

const mealsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: mealType, required: true },
    fat: { type: Number, required: false },
    sugar: { type: Number, required: false },
    carbohydrate: { type: Number, required: false },
    protein: { type: Number, required: false },
}, {
    toJSON: { //Transforming the mongoose JSON object to fit a DB commom pattern
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

mealsSchema.statics.build = (attributes: MealAttr) => {
    return new Meals(attributes);
};

const Meals = mongoose.model<MealDocument, MealModel>('mealsmodel', mealsSchema);

export { Meals };