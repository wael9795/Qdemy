import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./configs/cloudinary.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoutes.js";

// initiaize express app
const app = express();

//connect to database
await connectDB();
await connectCloudinary();

// middlewares
app.use(cors());
app.use(clerkMiddleware());



//Routes
app.get("/", (req, res) => {
  res.send("API Working");
});
app.post("/clerk", express.json(), clerkWebhooks);
app.use("/api/educator", express.json(), educatorRouter);

app.use("/api/course", express.json(), courseRouter);

app.use("/api/user", express.json(), userRouter);

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// Debug: Log all registered routes
app._router.stack.forEach(function (r) {
  if (r.route && r.route.path) {
    console.log("Registered Route:", r.route.path)
  }
});

// Catch-all route to debug 404s
app.use('*', (req, res) => {
  console.log(`[DEBUG] 404 Hit: ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    message: "Route not found in Express (Debug Catch-All)",
    path: req.originalUrl,
    method: req.method
  });
});


//port
const PORT = process.env.PORT || 5000;

if (process.env.VITE_NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
