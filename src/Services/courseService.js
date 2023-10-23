const dbConnection = require('../Utils/database')
const Course = require("../Models/courseModel") 

async function listCourses () {
    await dbConnection()
    const courses = await Course.find()
    return courses
}

async function findCourseByID (id) {
    await dbConnection()
    const course = await Course.findOne({_id:id})
    return course
} 

async function createCourse (course) {
    await dbConnection()
    const createdCourse = await Course.create(course)
    return createdCourse
}

async function deleteCourse (id) {
    await dbConnection()
    await Course.deleteOne({_id:id})
}

async function updateCourse (id, course) {
    await dbConnection()
    const updatedCourse = await Course.updateOne({_id:id}, course)
    return updatedCourse
}

module.exports = {
    listCourses,
    findCourseByID,
    createCourse,
    deleteCourse,
    updateCourse
}