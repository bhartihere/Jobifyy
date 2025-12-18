import mongoose from 'mongoose'
mongoose.set('strictQuery' , false);
const connectDB = (MONGO_URL) => {
  return mongoose.connect(MONGO_URL)
}

export default connectDB
