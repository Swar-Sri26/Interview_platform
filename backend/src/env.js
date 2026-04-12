import dontenv from 'dotenv'
dontenv.config();
 export const ENV={
    PORT:process.env .PORT,
    MONGO_URI:process.env.MONGO_URI
 }