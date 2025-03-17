import mongoose from "mongoose";

const MONGO_URI= process.env.MONGO_URI

if (!MONGO_URI) {
    throw new Error(
        "Please define the MONGODB URI (MONGO_URI) environment variable inside .env.local",
    );
}

let cached=global.mongoose 

if(!cached){
    cached=global.mongoose={conn:null,promise:null}
}
async function dbConnect() {

    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to MongoDB.");
        return;
      }

    if (cached.conn) {
        console.log(cached.conn);
        return cached.conn;
    }

    if (!cached.promise) {
        mongoose.set("strictQuery", true);
        cached.promise =  mongoose.connect(MONGO_URI, {
            dbName: "ecommerce"
        }).then((mongoose) => {
            cached.conn = mongoose;
            global.mongoose = cached;
            return mongoose;
        });
    }
    
    cached.conn = await cached.promise;

    // console.log(cached.conn);
    return cached.conn;
}

export default dbConnect