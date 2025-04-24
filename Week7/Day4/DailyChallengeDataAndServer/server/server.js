import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello From Express",
  });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.json({
    message: `I received your POST request. This is what you sent me: ${req.body.input}`,
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
