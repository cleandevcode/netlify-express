const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");
const cors = require("cors");
const app = express();

const port = 3001;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static(__dirname + "/build"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", async (req, res) => {
  const result = await fetch(
    "https://www.easybroker.com/feeds/b3JnYW5pemF0aW9uNDQ5MjM/organization_44923.xml"
  );

  res.send(result);
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => console.log(`Express server is running on  :${port}`));
