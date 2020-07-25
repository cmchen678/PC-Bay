import dotenv from "dotenv";

dotenv.config();

export default {
  API_URL: process.env.REACT_APP_API_URL || "http://localhost:5000/",
};
