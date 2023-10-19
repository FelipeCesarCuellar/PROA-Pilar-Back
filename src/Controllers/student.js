const createStudent = require("../Services/student.js")
const studentController = require("express").Router()


studentController.get('/', (req, res) => {
    res.send('OK!')
})

studentController.post('/', (req, res) => {
    const student = createStudent(req.body)
    res.status(201).send(student)
})

module.exports=studentController
