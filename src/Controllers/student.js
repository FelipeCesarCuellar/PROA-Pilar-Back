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

studentController.get('/:studentId', async (req, res) => {
    try{
        const studentFound = await st.findStudendByID(req.params.studentId)
        res.status(200).json(studentFound)
        console.log(studentFound)
    } catch (err){
        res.send(err)
    }
})

studentController.post('/', async (req, res) => {
    try{
        const newStudent = await st.createStudent(req.body)
        res.status(201).json(newStudent)
    } catch (err){
        res.status(400).send(err)
    }
})

studentController.delete('/:studentId', async (req, res) => {
    try{
        await st.deleteStudent(req.params.studentId)
        res.status(200).json()
    } catch (err){
        res.send(err)
    } 
})

module.exports=studentController
