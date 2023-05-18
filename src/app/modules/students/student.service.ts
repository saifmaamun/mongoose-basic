import { StudentsInterface } from "./student.interface";
import StudentModel from "./student.model";


// query
// query on model
export const createStudentToDB =async(payload:StudentsInterface):Promise<StudentsInterface>=>{

    const student = new StudentModel(payload);
    await student.save();
    // custom instance method
    console.log(student.fullName());
    return student;
}

export const getStudentsFromDB = async ():Promise<StudentsInterface[]>=>{
    const students = await StudentModel.find();
    return students;
}

export const getStudentByIdFromDB=async(payload:string | null):Promise<StudentsInterface | null>=>{
    const student = await StudentModel.findOne({id:payload});   
    return student    //id:payload must be in object format
}











/*
{
        id: 'd1',
        role: "teacher",
        password: 'teacher',
        name: {
            firstName: 'saif',
            middleName: 'rahman',
            lastName: 'mamun',
        },
        dateOfBirth: '5sept',
        gender: "male" ,
        classN: 12,
        roll: 13,
        institution: {
            school: 'ak',
            collage: 'doniya',
        },
        group: 'science',
        email: 'saif@gmail.com',
        contactNo: '013131313131',
        emergencyContactNo: '012334567890',
        presentAddress: 'n.gong',
        permanentAddress: 'same',
    }
*/