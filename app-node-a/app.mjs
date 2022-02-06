import express from "express";
import connect from "./db.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World from App-Node-A</h1>");
});

await connect();

app.listen(3000);