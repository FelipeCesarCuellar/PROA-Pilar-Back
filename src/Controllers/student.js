const st = require("../Services/student.js")
const studentController = require("express").Router()


studentController.get('/', async (req, res) => {
    try{
        const studentList = await st.listStudents()
        res.status(200).json(studentList)
        console.log(studentList)
    } catch (err){
        res.send(err)
    }
})

studentController.post('/', async (req, res) => {
    try{
        const student = await st.createStudent(req.body)
        res.status(201).json(student)
    } catch (err){
        res.status(400).send(err)
    }
})

studentController.delete('/:studentId', async (req, res) => {
    try{
        await st.deleteStudent(req.params.studentId)
        res.send()
    } catch (err){
        res.send(err)
    } 
})

module.exports=studentController
