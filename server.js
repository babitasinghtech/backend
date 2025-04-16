const express = require("express");
const app = express();

// Middleware: JSON body ko parse karta hai
app.use(express.json());

// ✅ Home Route
app.get("/post", (req, res) => {
  res.send("🔥 Babita ka server ready hai!");
});

// ✅ POST Route
app.post("/post", (req, res) => {
  const { title, content } = req.body;

  console.log("📩 Received data:", title, content);

  res.json({
    message: "✅ Post received successfully!",
    data: {
      title,
      content,
    },
  });
});

// ✅ Server Listen
app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
