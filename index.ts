import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tasks from "./routes/tasks";

const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5050

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).send("API is healthy");
});

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});

app.use("/api/tasks", tasks);
