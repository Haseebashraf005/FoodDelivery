import mongoose from 'mongoose';
import bcrypt from "bcrypt";
const restaurant_user_Schema = new mongoose.Schema({
  restaurantName: String,
  contactNo: String,
  email: { type: String, required: true, unique: true },
  address: String,
  password: String,
  city: String

});


// // Hash password before saving
// restaurant_user_Schema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next(); // only hash if new/changed
//   try {
//     const salt = await bcrypt.genSalt(10); // generate salt
//     this.password = await bcrypt.hash(this.password, salt); // hash password
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

// // Method to compare password during login
// restaurant_user_Schema.methods.comparePassword = function (enteredPassword) {
//   return bcrypt.compare(enteredPassword, this.password);
// };


export const RestaurantUser = mongoose.models.restaurantusers || mongoose.model('restaurantusers', restaurant_user_Schema);






// in Mongoose, a model (like Product) is a constructor function that represents a MongoDB collection. Creating an instance of the model (e.g., new Product(payload)) creates a new document that corresponds to a single record in that collection.
// The payload (e.g., {"name": "Laptop", "price": 999}) contains the data for this document. Instantiating the model with new Product(payload) structures this data according to the schema defined for the Product model, ensuring it’s ready to be saved to the MongoDB database.
// Example: If your Product schema defines fields like name and price, the new Product(payload) call creates a document with those fields, which can then be saved to the products collection in MongoDB.

// contactNo: {
//   type: String,
//   required: true,
//   match: [/^\+?[0-9]{10,15}$/, "Invalid phone number"] // optional regex validation
// },
// email: { type: String, required: true, unique: true },