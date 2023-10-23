const mongoose = require('mongoose')

const User = mongoose.model('User', {
    photo: String,
    name: String,
    email: String,
    password: String,
    created_at: String,
    updated_at: String,
})

module.exports = User