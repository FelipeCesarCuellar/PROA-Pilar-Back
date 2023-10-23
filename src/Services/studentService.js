const dbConnection = require('../Utils/database')
const Student = require('../Models/studentModel') 

async function listStudents () {
    await dbConnection()
    const students = await Student.find()
    return students
}

async function findStudendByID (id) {
    await dbConnection()
    const student = await Student.findOne({_id:id})
    return student
} 

async function createStudent (student) {
    await dbConnection()
    const createdStudent = await Student.create(student)
    return createdStudent
}

async function deleteStudent (id) {
    await dbConnection()
    await Student.deleteOne({_id:id})
}

async function updateStudent (id, student) {
    await dbConnection()
    const updatedStudent = await Student.updateOne({_id:id}, student)
    return updatedStudent
}

module.exports = {
    listStudents,
    findStudendByID,
    createStudent,
    deleteStudent,
    updateStudent
}