const us = require("../Services/userService")
const userController = require("express").Router()


userController.get('/:userId', async (req, res) => {
    const id = req.params.userId
    try{
        const userFound = await us.findUserByID(id)
        res.status(200).json(userFound)
        console.log(userFound)
    } catch (err){
        res.send(err)
    }
})

userController.put('/:userId', async (req, res) => {
    const id = req.params.userId
    const user = req.body
    try{
        const updatedUser = await us.updateUser(id, user)
        res.status(200).json(updatedUser)
    } catch (err){
        res.send(err)
    } 
})

module.exports=userController