const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  res.json("connected successfully");
});

app.listen(PORT, () => {
  console.log(`connected successfully to port ${PORT}`);
});
