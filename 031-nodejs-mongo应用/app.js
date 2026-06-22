const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

const Item = mongoose.model("Item", new mongoose.Schema({ name: String }));

app.get("/items", async (req, res) => res.json(await Item.find()));
app.post("/items", async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.json(item);
});

app.listen(3000, () => console.log("Node+Mongo app on 3000"));
