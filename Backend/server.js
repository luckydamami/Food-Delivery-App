import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { foodRouter } from "./routes/foodRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { cartRouter } from "./routes/cartRoute.js";
import "dotenv/config";
import orderRouter from "./routes/orderRoute.js";

//app configuration
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json()); //parsing incoming JSON data parsing
app.use(cors()); //Cross Origin Resource Sharing

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api Working!");
});

//server listening
app.listen(port, () => {
  console.log(`Server listen on port http://localhost:${port}`);
});
