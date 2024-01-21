const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const rooms = ["general", "tech", "finance", "crypto"];
const app = express();
const server = require("http").createServer(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8000;
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    server.listen(port, () =>
      console.log(`server is running at port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
