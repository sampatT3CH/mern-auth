import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import path from 'path'



mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.error(err);
})

const __dirname = path.resolve();
const app = express();
app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());

app.listen(3000,() => {
    console.log("Server is running on port 3000");
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success :false ,
        message,
        statusCode
    })
})

