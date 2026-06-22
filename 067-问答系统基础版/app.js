const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL);

const Question = mongoose.model(
  "Question",
  new mongoose.Schema({
    title: String,
    content: String,
    answers: [{ text: String, votes: { type: Number, default: 0 } }],
  })
);

app.get("/api/questions", async (req, res) => res.json(await Question.find()));
app.post("/api/questions", async (req, res) => res.json(await new Question(req.body).save()));
app.post("/api/questions/:id/answers", async (req, res) => {
  const q = await Question.findById(req.params.id);
  q.answers.push({ text: req.body.text });
  await q.save();
  res.json(q);
});

app.listen(3000, () => console.log("QA system on 3000"));
