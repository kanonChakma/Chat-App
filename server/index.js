import express from 'express';
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.DATA_BASE_URL, {
    dbName: 'event_db',
    useNewUrlParser: true,
    useUnifiedTopology: true 
 })
.then(() => console.log('connected successfully'))
.catch((err) => console.error(err));

const port = process.env.PORT || 8085;
const server = app.listen(port, () => {
    console.log('listening on port ' + port)
})
