import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import cartRoutes from './routes/cart.routes.js';
import myspaceRoutes from './routes/myspace.route.js';
import orderRoutes from './routes/order.route.js';



import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;


// app.use(
//   cors({
//     origin: 'http://localhost:3000', 
//     credentials: true, 
//   })
// );

app.use(
  cors({
    origin: [
      "http://localhost:3000", 
      "https://fresh-pick-fruits-ordering-platform.vercel.app", 
    ],
    credentials: true, 
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/myspace', myspaceRoutes);
app.use('/api/order', orderRoutes);



app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully ✅");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed ❌", err);
  });
