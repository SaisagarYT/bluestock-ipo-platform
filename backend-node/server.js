import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnect from './config/db.js';
dotenv.config(
    {
        path:'./.env'
    }
)

const app = express();
app.use(express.json());
app.use(cors())

dbConnect().then( ()=> {
    app.listen(process.env.PORT ||4000, 
        ()=>{console.log(`Server is running at ${process.env.PORT}`);
})
})
.catch((err)=>{
   console.log("connection failed while connecting to databse. ", err);
   
})