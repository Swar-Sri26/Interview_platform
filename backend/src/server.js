import express from 'express'
import cors from 'cors'
import {serve} from 'inngest/express'
import dotenv from 'dotenv'

import {ENV} from './lib/env.js'

import {connectDB} from './lib/db.js' 
import { inngest,functions } from './lib/ingest.js'

dotenv.config();

const app=express();
connectDB();
app.use(express.json());
//credentials:true meaning server allows browser to include cookies on requests 
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))

app.use("/api/inngest",serve({client:inngest,functions}));

const PORT=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"success from backend"})
})
app.listen(PORT,()=>{
    console.log("server is running on port:",PORT)
})