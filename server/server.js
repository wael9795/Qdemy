// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./configs/mongodb.js";
// import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
// import educatorRouter from "./routes/educatorRoutes.js";
// import { clerkMiddleware } from "@clerk/express";
// import connectCloudinary from "./configs/cloudinary.js";
// import courseRouter from "./routes/courseRoute.js";
// import userRouter from "./routes/userRoutes.js";

// // initiaize express app
// const app = express();

// //connect to database
// await connectDB();
// await connectCloudinary();

// // middlewares
// app.use(cors());
// app.use(clerkMiddleware());



// // Routes
// app.get("/", (req, res) => {
//   res.send("API Working - DEBUG MODE");
// });

// app.post("/clerk", express.json(), clerkWebhooks);
// app.use("/api/educator", express.json(), educatorRouter);
// app.use("/api/course", express.json(), courseRouter);
// app.use("/api/user", express.json(), userRouter);
// app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// // Debug logging
// app.use((req, res) => {
//   res.status(404).json({ msg: "Debug Catch-All Hit", path: req.originalUrl });
// });

// const PORT = process.env.PORT || 5000;

// // Only listen if not creating a Vercel build (Vercel sets VERCEL=1)
// if (!process.env.VERCEL) {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }

// export default app;

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import connectCloudinary from "./configs/cloudinary.js";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoutes.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();

// CORS
app.use(cors());

// ✅ JSON middleware (لكل شيء ما عدا Stripe)
app.use((req, res, next) => {
  if (req.originalUrl === "/stripe") {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// اتصالات
await connectDB();
await connectCloudinary();

// 🔓 Routes عامة
app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/course", courseRouter);

// 🔐 Clerk
app.use(clerkMiddleware());

// Routes محمية
app.use("/api/educator", educatorRouter);
app.use("/api/user", userRouter);

// Webhooks
app.post("/clerk", clerkWebhooks);
app.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhooks
);

// 404
app.use((req, res) => {
  res.status(404).json({
    error: "Route Not Found",
    path: req.originalUrl
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
