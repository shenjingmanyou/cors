const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.listen("8080", (err) => {
  if (err) {
    console.log("connect failed!");
    return;
  }
  console.log("connect successful!");
})
