import mongoose from 'mongoose';

// const MONGODB_URI = 'mongodb://localhost:27017/store'; 
// const MONGODB_URI = `mongodb+srv://haseebashraf05_db_user:Pakistan1234@cluster1.sb3s5dk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`; 
const MONGODB_URI = 'mongodb://localhost:27017/resturantDB'; 


async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) { 
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB'); 
  }else{    
    // console.log(mongoose.connection.readyState)
  }

} 
export default connectToDatabase;
// ,{useNewUrlParser:true}