import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// ✅ JSON parsing
app.use(express.json());

// ✅ CORS configuration
app.use(cors({
  origin: "https://royalprincesingh.github.io", // tumhara frontend
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

// ✅ Handle OPTIONS preflight requests globally
app.options("*", cors());

// ✅ Contact form route
app.post("/contactform", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 16-char app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: message,
    });

    res.json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ✅ Default route
app.get("/", (req, res) => res.send("Backend running..."));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
