let express = require("express");
var proxy = require("express-http-proxy");

let app = express();

// 浏览器与服务器有同源策略限制，服务器与服务器之间没有同源策略限制
// 下面解决同源策略跨域问题，因为当前端口为3001，而前端请求端口为3000
app.all("*", function (req, res, next) {
  //必须卸载app.get前面才有效
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  if (req.method == "OPTIONS") {
    res.send(200);
    /*让options请求快速返回*/
  } else {
    next();
  }
});

// ‘proxy’表示所匹配到的url以 /proxy开头的都会由这里的中间层转发
// 'http://127.0.0.1:3001/proxy/api/search'  前端请求pathname以/proxy开头所以会被这个中间层转发到目标url

app.use(
  "/proxy",
  proxy(
    "http://127.0.0.1:9001", // 目标域名，只能写域名，不能带上pathname
    {
      proxyReqPathResolver: function (request) {
        console.log(request.baseUrl); // '/proxy'
        console.log(request.url); // ' /api/search'
        return request.url; // 目标数据的pathname,必须有
      },
    }
  )
);

let server = app.listen(9000, function () {
  var port = server.address().port;
  console.log("服务开启成功端口号是：" + port);
});
