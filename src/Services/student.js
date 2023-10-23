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

async function deleteStudent (id) {
    await dbConnection()
    const deletedStudent = await Student.findByIdAndDelete(id)
    return deletedStudent
}

module.exports = {
    listStudents,
    createStudent,
    deleteStudent
}