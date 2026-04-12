import express from 'express'
import cors from 'cors'

import {ENV} from './env.js'



const app=express();

app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).json({message:"success from backend"})
})
app.listen(ENV.PORT,()=>{
    console.log("server is running on port:",ENV.PORT)
})