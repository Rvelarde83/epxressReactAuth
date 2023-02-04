import mongoose from "../mongoose/mongoose.js";

const {Schema, models} = mongoose 

const noteSchema = new Schema({
    title: String,
    message: String,
    username: String
},{timestamps:true})

const Note = model("Note", noteSchema)

export default Note