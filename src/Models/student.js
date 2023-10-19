const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    photo: { type: String, required: false },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false, unique: true },
    region: { type: String, required: true },
    courses: { type: String, required: true },
    status: { type: Number, required: false },
    answers: { type: String },
    created_at: { type: String, required: true },
    updated_at: { type: String, required: true }
})

const Student = mongoose.model('Student', studentSchema)

module.exports= Student