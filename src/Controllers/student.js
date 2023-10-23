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
    const id = req.params.studentId
    try{
        const studentFound = await st.findStudendByID(id)
        res.status(200).json(studentFound)
        console.log(studentFound)
    } catch (err){
        res.send(err)
    }
})

studentController.post('/', async (req, res) => {
    const student = req.body
    try{
        const newStudent = await st.createStudent(student)
        res.status(201).json(newStudent)
    } catch (err){
        res.send(err)
    }
})

studentController.delete('/:studentId', async (req, res) => {
    const id = req.params.studentId
    try{
        await st.deleteStudent(id)
        res.status(200).json()
    } catch (err){
        res.send(err)
    } 
})

studentController.put('/:studentId', async (req, res) => {
    const id = req.params.studentId
    const student = req.body
    try{
        const updatedStudent = await st.updateStudent(id, student)
        res.status(200).json(updatedStudent)
    } catch (err){
        res.send(err)
    } 
})

module.exports=studentController
