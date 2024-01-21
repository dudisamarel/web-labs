const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
const PORT = process.env.PORT || 3030;

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

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
