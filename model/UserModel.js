import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true, },
    phone: { type: String, required: true, },
    address: { type: String, required: true, },
    // role: { type: String, enum: ["user", "admin"], default: "user", },
    // isActive: { type: Boolean, default: true, },
    // createdAt: { type: Date, default: Date.now, },
});


const userModel = mongoose.model("User", userSchema);

export default userModel;