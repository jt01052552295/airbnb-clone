const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write("hello node 1");
  res.write("hello node 2");
  res.end("hello world node");
});
server.listen(3065, () => {
  console.log("서버 실행중");
});
