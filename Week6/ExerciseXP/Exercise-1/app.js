const express = require("express");
const app = express();
app.use(express.json());
const indexRouter = require("./routes/index.js");

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});