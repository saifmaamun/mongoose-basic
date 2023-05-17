// import express, cors

import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema } from 'mongoose';




const app: Application = express()
app.use(cors()); //use cors

// parse data
app.use(express.json());                                //json data parser
app.use(express.urlencoded({ extended: true }));           //urlencoded

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('keep rocking')
    next()
})


/*
to insert a new data into mongoDB follow those steps
- step1 : Interface
- step2 : Schema
- step3 : Model
- step4 : DataBase Query
*/




// - step1 : Interface
// creating interface

interface IStudents {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    classN: number;
    roll: number;
    institution: {
        school: string;
        collage?: string;
    }
    group?: string;
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}


// - step2 : Schema
// creating Schema using Interface
const studentSchema = new Schema<IStudents>({
   
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName:{
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    dateOfBirth:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ['male', 'female'],
    },
    classN: {
        type: Number,
        required: true,
    },
    roll: {
        type: Number,
        required: true,
    },
    institution: {
        school: {
            type: String,
            required: true,
        },
        collage:{
            type: String,
        },
    },
    group: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    presentAddress:{
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
});





export default app