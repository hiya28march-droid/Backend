import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

const app = express();

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });

/*
const app = express();

function connectDB(){}


( async () => {
    try{
        await mongoose.connect('${process.env.MONGODB_URI}', {
            dbName: DB_NAME
        })
        app.on("error",() => {
            console.log("ERROR",error );
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    }catch(error){
        console.error("Error connecting to MongoDB:", error);
    }
})()
*/



