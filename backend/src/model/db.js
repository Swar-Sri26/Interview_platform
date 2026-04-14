import {ENV} from '../env.js';
import mongoose from 'mongoose';

const mongo_url=ENV.MONGO_URI;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("MongoDB connected...")
})
.catch((err)=>{
    console.log("MongoDB connection error:",err)
})