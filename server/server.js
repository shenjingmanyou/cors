let express = require("express");
let app = express();

app.get("/api/search", function (req, res) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.json({
    errno: 0,
    data: {
      test: 333,
    },
  });
});

let server = app.listen(9001, function () {
  var port = server.address().port;
  console.log("服务开启成功端口号是：" + port);
});
