import express from "express";
import "dotenv/config";
import echoRoutes from "./routes/echo.routes.js";


if (!process.env.PORT) {
  throw new Error("PORT is not defined in environment");
}

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(express.json());
app.use(echoRoutes);
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);

});

process.on("SIGINT", () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
