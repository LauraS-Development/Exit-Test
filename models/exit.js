import mongoose from "mongoose";

const SchemaExit = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    slug: {
        type: String,
        required: true,
        maxlength: 125,
        unique: true
    }
},
{timestamps:true}
)

export default mongoose.models.Exit || mongoose.model("Exit", SchemaExit)