const mongoose = require('mongoose')

const Student = mongoose.model('Student', {
    photo: String,
    name: String,
    email: String,
    phone: String,
    region: String,
    courses: String,
    status: Number,
    answers: String,
    created_at: String,
    updated_at: String,
})

module.exports = Student
