import mongoose, { mongo } from 'mongoose';

enum mealType {
    carbohydrates = 'carbohydrates',
    protein = 'protein',
    fat = 'fat'
};

interface MealAttr {
    name: string;
    type: mealType;
    calories: number;
};

interface MealDocument extends mongoose.Document {
    name: string;
    type: mealType;
    calories: number;
}

interface MealModel extends mongoose.Model<MealDocument> {
    build(attributes: MealAttr): MealDocument;
}

const mealsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: mealType, required: true },
    calories: { type: Number, required: true },
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