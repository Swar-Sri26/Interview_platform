import express from 'express'
import path from 'path'
import cors from 'cors'
import {serve} from '@inngest/express'
import {ENV} from './env.js'

import './model/db.js'
import { inngest } from './lib/ingest.js'

const app=express();

app.use(express.json());
//credentials:true meaning server allows browser to include cookies on requests 
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))

app.use("api/inngest",serve({client:inngest,functions}));

app.get('/',(req,res)=>{
    res.status(200).json({message:"success from backend"})
})
app.listen(ENV.PORT,()=>{
    console.log("server is running on port:",ENV.PORT)
})