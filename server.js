const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.use("/csrf", require("./csrf/server"));

app.listen(8080, () => console.log("listening on port 8080"));
