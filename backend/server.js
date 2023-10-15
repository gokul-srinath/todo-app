const express = require("express");
const bodyParser = require("body-parser");
const TodoRoute = require("./Routes/Todo");
const connect = require("./db/connect");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/todo", TodoRoute);

app.listen(PORT, () => {
  connect();
  console.log("Server running on Port:", PORT);
});
