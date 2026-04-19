import {StreamChat} from 'stream-chat'
import { ENV } from './env.js'

const apiKey=ENV.STREAM_API_KEY;
const apiSecret=ENV.STREAM_API_SECRET;


if(!apiKey || !apiSecret) {
    console.error("STREAM_API_KEY and STREAM_API_SECRET are required");
}

export const chatClient =StreamChat.getInstance(apiKey, apiSecret);
//upsert:we can both create and update the data.
export const upsertStreamUser=async (userData) =>{
    try{
        await chatClient.upsertUsers(userData)
        console.log("Stream user upserted successfully",userData);
    } catch (error) {
        console.error("Error upserting Stream user:", error);
        
    }
}
export const deleteStreamUser=async(userId)=>{
    try{
        await chatClient.deleteUser(userId);
        console.log("Stream user deleted successfully",userId);
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    
    }
}
