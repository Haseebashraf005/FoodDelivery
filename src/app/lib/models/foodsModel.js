import mongoose from 'mongoose';
const fooditems_Schema = new mongoose.Schema({
    foodname: String,
    price: String,
    image: String,
    description: String,
    resto_id: mongoose.Schema.Types.ObjectId

});





export const FoodModel = mongoose.models.fooditems || mongoose.model('fooditems', fooditems_Schema);





