const dbConnection = require('../Utils/database')
const Student = require('../Models/student') 

async function listStudents () {
    await dbConnection()
    const students = await Student.find()
    return students
}

async function createStudent (student) {
    await dbConnection()
    const createdStudent = await Student.create(student)
    return createdStudent
}

module.exports=createStudent,listStudents