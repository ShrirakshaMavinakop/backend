const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/ProductRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/", productRoutes);

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGODB_URL)

  .then(() => {
    console.log("Database conected");

    app.listen(3000, () => {
      console.log("server is running in port 3000");
    });
  })

  .catch(() => {
    console.log("Error conecting to database:", error.message);
  });
