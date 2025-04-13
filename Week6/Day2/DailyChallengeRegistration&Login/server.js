const express = require("express");
const usersRouter = require("./router/usersRouter");
const authRouter = require("./router/authRouter");
const app = express();
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
