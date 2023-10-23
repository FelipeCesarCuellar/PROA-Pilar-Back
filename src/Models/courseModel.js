const mongoose = require('mongoose')

const Course = mongoose.model('Course', {
    photo: String,
    name: String,
    teachers: String,
    students: String,
    region: String,
    start_date: String,
    end_date: String,
    created_at: String,
    updated_at: String,
})

module.exports = Course