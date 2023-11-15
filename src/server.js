const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5173;

app.get("/download-zip", (req, res) => {
  const zipFilePath = path.join(__dirname, "/assets/img/Nunito_Sans.zip"); // Ganti dengan path yang sesuai
  const zipFileContent = fs.readFileSync(zipFilePath);

  const blob = new Blob([zipFileContent], { type: "application/zip" });
  const url = window.URL.createObjectURL(blob);

  res.setHeader("Content-Disposition", "attachment; filename=coba.zip");
  res.setHeader("Content-Type", "application/zip");
  res.status(200).send(blob);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
