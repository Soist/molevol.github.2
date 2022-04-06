const express = require("express");
const app = express();

const port = process.env.PORT || 4000;
const cors = require("cors");

const upload = require("./routes/upload");
const drop_off = require("./routes/drop_off");

app.get("/", (req, res) => {
  res.send(
    "We are finally making progress!!!!! Node.js is running Express.js is being used for development, expect an update sometime real soon!!"
  );
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/upload", upload);

app.use("/drop_off", drop_off);

app.get("*", (req, res) => {
  res.status(404).send("404 page not found");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
