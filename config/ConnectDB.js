import mongoose from "mongoose";

const connectDB = async (MONGO_URL) => {
    try{
        const dbOptions = {
            dbName: "UsersData1",
        };
        await mongoose.connect(MONGO_URL, dbOptions);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed", error);
    }
}

export default connectDB;