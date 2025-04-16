
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Babita ka Node server working! 🎉");
});

server.listen(3000, () => {
  console.log("✅ Basic Node server running on http://localhost:3000");
});
