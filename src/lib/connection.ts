import mongoose from "mongoose";
import {mongoUrl,dbName} from "./constants";
type ConnectionObject = {
    isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    console.log("mongoUrl",mongoUrl);
    console.log("dbName",dbName);
    if (connection.isConnected) {
        console.log("Using existing connection");
        return;
    }
    try {
        const db = await mongoose.connect(`${mongoUrl}/${dbName}`, {});
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB successfully");
    } catch (error: any) {
        console.log("Error connecting to MongoDB", error.message);
        process.exit(1);
    }
}

export default dbConnect;
