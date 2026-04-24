/**
 * @author Aashu Singh
 */
import express from "express";
import path, { dirname } from "path";
import env from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
//@ts-expect-error
import { ConecntDb } from "./db.ts";

env.config();
ConecntDb();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT) || 8080;
app.use(express.static("public"));

//routes
app.get("/", async (req, res) => {
  res.sendFile("index.html");
});
//Port
app.listen(PORT, () => {
  console.log(`app Is Runing at port : ${PORT}`);
});
