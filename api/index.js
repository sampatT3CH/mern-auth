import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import bodyParser from 'body-parser'



mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.error(err);
})

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(3000,() => {
    console.log("Server is running on port 3000");
});

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

