const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "请上传文件" });
  res.json({
    filename: req.file.filename,
    size: req.file.size,
    url: `/uploads/${req.file.filename}`,
  });
});

app.use("/uploads", express.static("uploads"));

app.listen(3000, () => console.log("File upload service on 3000"));
