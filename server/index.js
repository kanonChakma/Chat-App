import cors from "cors";
import * as dotenv from 'dotenv';
import express from 'express';
import { Socket } from "socket.io";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
dotenv.config()

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
connectDB();


const port = process.env.PORT || 8086;
const server = app.listen(port, () => {
    console.log('listening on port ' + port)
})
const io = new Socket(server, {
    cors: {
        origin: "http://localhost:3000",
        credential: true
    }
})

global.onlineUsers =new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });
   socket.on("send-msg", (data) => {
       const sendUserSocket = onlineUsers.get(data.to);
       if(sendUserSocket){
           socket.to(sendUserSocket).emit("msg-recieve", data.message);
       }
   })
})