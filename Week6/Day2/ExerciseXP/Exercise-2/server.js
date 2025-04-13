const express = require("express");
const app = express();
app.use(express.json());
const Bookrouter = require("./Routes/bookRoute");

app.use("/api", Bookrouter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server Error" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
