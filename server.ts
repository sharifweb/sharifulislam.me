import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for contact form submissions
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      res.status(400).json({ error: "Missing required contact fields name, email, or message" });
      return;
    }

    console.log(`[Contact Submission] Received contact from ${name} (${email}): ${message}`);
    
    // Response back to client
    res.json({
      success: true,
      message: "Message received successfully",
      data: {
        name,
        email,
        timestamp: new Date().toISOString()
      }
    });
  });

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
  });

  // Vite middleware for development or serving compiled files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
