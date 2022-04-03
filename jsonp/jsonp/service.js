const express = require("express");
const app = express();

app.get("/get_jsonp", (req, res) => {
  let {callback} = req.query
  let personArr = [{name:'peiqi',age:12},{name:'suxi',age:16}]

  console.log(callback)
  res.send(`${callback}(${JSON.stringify(personArr)})`)
})

app.listen("8081", (err) => {
  if (err) {
    console.log("connect failed!");
    return;
  }
  console.log("connect successful!");
})
