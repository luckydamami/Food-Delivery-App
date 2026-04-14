import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatecoder:567438@cluster0.7mqzto5.mongodb.net/food-del",
    )
    .then(() => console.log("DB is connected!"));
};

//url :  mongodb+srv://greatecoder:567438@cluster0.7mqzto5.mongodb.net/?appName=Cluster0
//password : 567438
