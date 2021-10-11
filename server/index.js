const express = require("express");

const PORT = process.env.PORT || 3001;
const fs = require("fs");
const app = express();
const path = require("path");

app.get("/api", (req, res) => {
  const data = fs.readFileSync(path.resolve(__dirname, "listings.json"));

  let listings = JSON.parse(data);
  res.json(listings);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
