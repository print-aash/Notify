/**
 * @author Aashu Singh
 */
import express from "express";
import env from "dotenv";

env.config();
const app = express();
const PORT = Number(process.env.PORT) || 8080;

app.get("/", async (req, res) => {
  res.send("Hi");
});

//Port
app.listen(PORT, () => {
  console.log(`app Is Runing at port : ${PORT}`);
});
