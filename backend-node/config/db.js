import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
        const connectDatabase = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`Databse connected. ${connectDatabase.connection.host}`);
        
    } catch (error) {
        console.log("Databse connection failed.", error);
        
    }

}

    

export default dbConnect;