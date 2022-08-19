import mongoose from "mongoose";
import {relativizeURL} from "next/dist/shared/lib/router/utils/relativize-url";

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {con: null, promise: null}
}

async function dbConnect () {
    if (cached.con){
        console.log('DB aktiv')
        return cached.con
    }

    if (!cached.promise)  {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(process.env.MONGODB_URI, options).then(mongoose => {
            console.log('DB wird gestartet')
            return mongoose
        })
    }
    cached.con = await  cached.promise
    return cached.con
}

async function dbDisconnect() {
    await mongoose.disconnect();
    console.log('DB beendet')
}

const mongodb = {dbConnect, dbDisconnect}
export default mongodb