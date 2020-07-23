import dotenv from "dotenv";

dotenv.config();

module.exports = {
  mongoURI:
    "mongodb+srv://Christian:belcross2yeah@cluster0.opd8z.mongodb.net/test?retryWrites=true&w=majority",
};

export default {
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost/pcbay",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "sb",
};
