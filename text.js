const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json

// GET route
app.get("/", (req, res) => {
  res.send("🚀 Babita ka backend server chal raha hai!");
});

// POST route
app.post("/post", (req, res) => {
  const { title, content } = req.body;
  console.log("📥 Received:", title, content);

  res.json({
    message: "✅ Post received!",
    data: {
      title,
      content,
    },
  });
});

// Server listen
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
