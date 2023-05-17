import express from 'express';
import { createStudent, getStudents } from './student.controller';
const router = express.Router();


// api  
router.get('/', getStudents);
router.post('/create-student', createStudent);



export default router;