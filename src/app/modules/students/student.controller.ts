import {  NextFunction, Request, Response } from 'express';
import { createStudentToDB, getStudentsFromDB } from './student.service';




// get students from DB
export const getStudents =async(req:Request, res:Response, next: NextFunction)=>{
    const students = await getStudentsFromDB();
    res.status(200).json({
        status: 'getting students',
        data: students,
    })
}



// creating students and posting them to database
export const createStudent=async(req: Request, res: Response, next: NextFunction) => {
    const data = req.body;      // getting the data from the request to get the students
    const student = await createStudentToDB(data);
    res.status(200).json({
        status: 'student created',
        data: student,
    })
}