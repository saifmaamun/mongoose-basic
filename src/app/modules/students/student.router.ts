import express from 'express';
import { createStudent, getStudentByID, getStudents, getTeachers } from './student.controller';
const router = express.Router();


// api  
router.get('/', getStudents);
router.get('/teachers', getTeachers);
router.get('/:id', getStudentByID);
router.post('/create-student', createStudent);



export default router;