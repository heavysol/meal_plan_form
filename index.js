const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.use(express.static("public"));

app.post("/", function (req, res) {
  const mealName = req.body.mealname;
  const qty = req.body.qty;
  const price = req.body.price;
  const eatery = req.body.eatery;
  const totalCost = req.body.totalCost;

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
