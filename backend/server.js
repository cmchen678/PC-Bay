import express from "express";
import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";
import bodyParser from "body-parser";

var cors = require("cors");
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(
    "mongodb+srv://Christian:belcross2yeah@cluster0.opd8z.mongodb.net/pc-bay?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .catch((error) => console.log(error.reason));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); //Simple Usage (Enable All CORS Requests)
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
