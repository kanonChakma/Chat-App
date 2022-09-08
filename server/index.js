import cors from "cors";
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
dotenv.config()

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);


 const url=`mongodb+srv://kanonchakma1:kanon121chakma@cluster0.u7xm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => console.log('connected successfully'))
.catch((err) => console.error(err));

const port = process.env.PORT || 8086;
const server = app.listen(port, () => {
    console.log('listening on port ' + port)
})
