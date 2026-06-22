const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "请上传图片" });
  res.json({
    filename: req.file.filename,
    size: req.file.size,
    url: `/uploads/${req.file.filename}`,
    mimetype: req.file.mimetype,
  });
});

app.get("/api/images", (req, res) => {
  const fs = require("fs");
  const files = fs.existsSync("./uploads") ? fs.readdirSync("./uploads") : [];
  res.json(files.map((f) => ({ name: f, url: `/uploads/${f}` })));
});

app.listen(3000, () => console.log("Image upload on 3000"));
