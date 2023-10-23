const dbConnection = require('../Utils/database')
const User = require('../Models/userModel') 

async function findUserByID (id) {
    await dbConnection()
    const user = await User.findOne({_id:id})
    return user
} 

async function updateUser (id, user) {
    await dbConnection()
    const updatedUser = await User.updateOne({_id:id}, user)
    return updatedUser
}

module.exports = {
    findUserByID,
    updateUser
}