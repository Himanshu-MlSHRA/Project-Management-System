import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    avatar: {
        type: {
            url: String,
            localPath: String,
        },
        default: {
            url: `https://dummyimage.com/6969x669/6969/1s1e`,
            localPath: "",
        },
        username : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullName : {
            type: String,
            trim: true
        },
        password : {
            type: String,
            required: [true, "Password is required"]
        },
        isEmailVerified : {
            type: Boolean,
            default: false
        },
        refreshTokens : {
            type: String
        },
        forgotPasswordToken : {
            type :String,
        },
        forgotPasswordTokenExpiry : {
            type: Date
        },
        emailVerificationToken : {
            type: String
        },
        emailVerificationTokenExpiry : {
            type: Date
        }
     }
        
})
export const User = mongoose.model("User", userSchema)