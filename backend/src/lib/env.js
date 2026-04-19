import dontenv from 'dotenv'
dontenv.config({quiet:true})
 export const ENV={
    MONGO_URI:process.env.MONGO_URI,
    NODE_ENV:process.env.NODE_ENV,
    CLIENT_URL:process.env.CLIENT_URL,
    INNGEST_EVENT_KEY:process.env.INGEST_EVENT_KEY,
    INNGEST_SIGNIN_KEY:process.env.INGEST_SIGNIN_KEY,
    STREAM_API_KEY:process.env.STREAM_API_KEY,
    STREAM_API_SECRET:process.env.STREAM_API_SECRET,

 }