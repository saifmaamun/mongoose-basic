import {  NextFunction, Request, Response } from 'express';
import { createStudentToDB, getStudentByIdFromDB, getStudentsFromDB, getTeachersFromDB } from './student.service';




// get students from DB
export const getStudents =async(req:Request, res:Response, next: NextFunction)=>{
    const students = await getStudentsFromDB();
    res.status(200).json({
        status: 'getting students',
        data: students,
    })
}

// get students from DB by id
export const getStudentByID = async(req:Request,res:Response, next: NextFunction)=>{
    const {id} = req.params;
    const student = await getStudentByIdFromDB(id);
    res.status(200).json({
        status: 'getting students by id',
        data: student,
    })
}
export const getTeachers= async(req:Request, res:Response, next: NextFunction)=>{
    const teachers = await getTeachersFromDB();
    res.status(200).json({
        status: 'getting teachers',
        data: teachers,
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
