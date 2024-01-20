const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { Server } = require("socket.io");

const rooms = ["general", "tech", "finance", "crypto"];
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = require("http").createServer(app);
const PORT = 5000;
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => console.log(`server is running at port ${PORT}...`));
