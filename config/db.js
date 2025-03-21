import mongoose from "mongoose";
let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}
async function connectDB() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }
        cached.promise = mongoose.connect(`${process.env.MONGOD_URL}/quiclcart`, opts).then(mongoose => {
            return mongoose
        })
    }
    cached.com = await cached.promise
    return cached
}

export default connectDB