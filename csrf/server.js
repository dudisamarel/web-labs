const express = require("express"),
  app = express();

app.post("/login", (req, res) => {
  const cookieType = req.body.cookieType;
  let cookie;
  if (cookieType != "default") {
    cookie = `user=victim; samesite=${cookieType}; secure`;
  } else {
    cookie = `user=victim;`;
  }
  res.setHeader("set-cookie", [cookie]);
  res.send(`Cookie SameSite equal to ${cookieType}`);
});

app.get("/validate", (req, res) => {
  const cookie = req.headers.cookie;
  if (cookie) res.sendFile(`${__dirname}/cookie.gif`);
  else {
    res.sendStatus(403);
    res.end();
  }
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client.html`);
});

module.exports = app;
