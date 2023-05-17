import express from 'express';
import { createStudent } from './student.controller';
const router = express.Router();


// api  
router.get('/', createStudent);



export default router;