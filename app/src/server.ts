/**
 * @author Aashu Singh
 */
import express from "express";
import env from "dotenv";
import mongoose from "mongoose";

env.config();
const app = express();
const PORT = Number(process.env.PORT) || 8080;

//Mongoose
export const ConecntDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI!);
    console.log("Db Conected");
  } catch (err) {
    console.error(err);
  }
};
ConecntDb();
app.get("/", async (req, res) => {
  res.send("Hi");
});

//Port
app.listen(PORT, () => {
  console.log(`app Is Runing at port : ${PORT}`);
});
