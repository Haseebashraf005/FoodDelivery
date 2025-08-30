import mongoose from 'mongoose';

const restaurant_user_Schema = new mongoose.Schema({
  name: String,

});

export const RestaurantUser =  mongoose.models.restaurantusers || mongoose.model('restaurantusers', restaurant_user_Schema);  

 


// in Mongoose, a model (like Product) is a constructor function that represents a MongoDB collection. Creating an instance of the model (e.g., new Product(payload)) creates a new document that corresponds to a single record in that collection.
// The payload (e.g., {"name": "Laptop", "price": 999}) contains the data for this document. Instantiating the model with new Product(payload) structures this data according to the schema defined for the Product model, ensuring it’s ready to be saved to the MongoDB database.
// Example: If your Product schema defines fields like name and price, the new Product(payload) call creates a document with those fields, which can then be saved to the products collection in MongoDB.