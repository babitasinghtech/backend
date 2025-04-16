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
  