import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

// ✅ JSON parsing
app.use(express.json());

// ✅ CORS configuration
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "https://royalprincesingh.github.io"], // Allow local dev and production
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

// ✅ Handle OPTIONS preflight requests globally
app.options("*", cors());

// ✅ Contact form route with email sending only
app.post("/contactform", limiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use your email as sender
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b35;">New Contact Form Message</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #ff6b35;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email // Allow replying directly to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`Email sent successfully from ${name} (${email})`);
    res.json({ message: "Message sent successfully! I'll get back to you soon." });

  } catch (err) {
    console.error("Email sending error:", err);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

// ✅ Default route
app.get("/", (req, res) => res.send("Backend running with Nodemailer..."));

// ✅ Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT} with email functionality`));
