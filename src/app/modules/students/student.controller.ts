import {  NextFunction, Request, Response } from 'express';
import { createStudentToDB } from './student.service';

export const createStudent=async(req: Request, res: Response, next: NextFunction) => {
    const student = await createStudentToDB();
    res.status(200).json({
        status: 'student created',
        data: student,
    })
}