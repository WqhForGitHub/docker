const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const DATA_FILE = "/app/data/notes.json";

function readNotes() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}
function writeNotes(notes) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(notes));
}

app.get("/api/notes", (req, res) => res.json(readNotes()));
app.post("/api/notes", (req, res) => {
  const notes = readNotes();
  const note = { id: Date.now(), ...req.body };
  notes.push(note);
  writeNotes(notes);
  res.json(note);
});
app.delete("/api/notes/:id", (req, res) => {
  const notes = readNotes().filter((n) => n.id != req.params.id);
  writeNotes(notes);
  res.json({ ok: true });
});

app.listen(3000, () => console.log("Notes app on 3000"));
