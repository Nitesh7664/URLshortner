const express = require("express");
const app = express();

const connectDb = require("./db/connection");

connectDb();

const PORT = process.env.PORT || 3000;

app.use(express.json({ extended: true }));

//routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/shorten"));

app.listen(PORT, () => {
  console.log(`connected successfully to port ${PORT}`);
});
