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
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./configs/cloudinary.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

// ✅ middlewares العامة
app.use(cors());
app.use(express.json());
app.use(
  clerkMiddleware({
    publicRoutes: [
      "/",
      "/api/course/all",
      "/api/course/:id"
    ]
  })
);


// ✅ اتصالات
await connectDB();
await connectCloudinary();

// ✅ Routes
app.get("/", (req, res) => {
  res.send("API Working - DEBUG MODE");
});

app.post("/clerk", clerkWebhooks);
app.use("/api/educator", educatorRouter);
app.use("/api/course", courseRouter);
app.use("/api/user", userRouter);

// ⚠️ Stripe يحتاج raw
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// ❗ اجعل هذا آخر شيء
app.use((req, res) => {
  res.status(404).json({
    msg: "Route Not Found",
    path: req.originalUrl
  });
});

const PORT = process.env.PORT || 5000;

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
