const createStudent = require("../Services/student.js")
const listStudents = require("../Services/student.js")
const studentController = require("express").Router()


studentController.get('/', async (req, res) => {
    const studentList = await listStudents()
    res.send(studentList)
})

studentController.post('/', async (req, res) => {
    const student = await createStudent(req.body)
    res.status(201).send(student)
})

module.exports=studentController
