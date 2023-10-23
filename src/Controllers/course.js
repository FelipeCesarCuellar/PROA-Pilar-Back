const cr = require("../Services/course")
const courseController = require("express").Router()


courseController.get('/', async (req, res) => {
    try{
        const courseList = await cr.listCourses()
        res.status(200).json(courseList)
        console.log(courseList)
    } catch (err){
        res.send(err)
    }
})

courseController.get('/:courseId', async (req, res) => {
    const id = req.params.courseId
    try{
        const courseFound = await cr.findCourseByID(id)
        res.status(200).json(courseFound)
        console.log(courseFound)
    } catch (err){
        res.send(err)
    }
})

courseController.post('/', async (req, res) => {
    const course = req.body
    try{
        const newCourse = await cr.createCourse(course)
        res.status(201).json(newCourse)
    } catch (err){
        res.send(err)
    }
})

courseController.delete('/:courseId', async (req, res) => {
    const id = req.params.courseId
    try{
        await cr.deleteCourse(id)
        res.status(200).json()
    } catch (err){
        res.send(err)
    } 
})

courseController.put('/:courseId', async (req, res) => {
    const id = req.params.courseId
    const course = req.body
    try{
        const updatedCourse = await cr.updateCourse(id, course)
        res.status(200).json(updatedCourse)
    } catch (err){
        res.send(err)
    } 
})

module.exports=courseController
