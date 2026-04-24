/**
 * @author Aashu Singh
 * @description
 * - Database file
 * - mongoose service used
 */
//Mongoose
import mongoose from "mongoose";
export const ConecntDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI!);
    console.log("Db Conected");
  } catch (err) {
    console.error(err);
  }
};
