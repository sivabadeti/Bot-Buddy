const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let { userInput } = req.body;

  // Trim input once
  if (!userInput || (userInput = userInput.trim()) === "") {
    return res.status(400).json({ message: "Please provide a valid input." });
  }

  try {
    const lowerInput = userInput.toLowerCase();
    if(lowerInput.includes("hello")&&lowerInput.includes("boss") ){
      return res.json({ message: "Hello, this is Bot-Buddy,My Boss is the Great Siva Badeti 😎"})
    }
    else if (lowerInput.includes("hello")) {
      return res.json({ message: "Hello, this is Bot-Buddy ☺️. How can I help you ❓" });
    } 
    else if(lowerInput.includes("boss")){
      return res.json({ message: "My Boss is the Great Siva Badeti "})
    }
    else {
      return res.json({ message: "Sorry, I'm still learning 💻. I'll help you later 🔜." });
    }
  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({ message: "Something went wrong from backend" });
  }
});

module.exports = router;

