// import express, cors,routes

import express, { Application } from 'express';
import cors from 'cors';

// application route
import studentRoute from './app/modules/students/student.router';



const app: Application = express()
app.use(cors()); //use cors

// parse data
app.use(express.json());                                //json data parser
app.use(express.urlencoded({ extended: true }));           //urlencoded



app.use('/students', studentRoute)


/*
to insert a new data into mongoDB follow those steps
- step1 : Interface
- step2 : Schema
- step3 : Model
- step4 : DataBase Query
*/

export default app