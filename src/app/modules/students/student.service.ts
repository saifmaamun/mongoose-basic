import StudentModel from "./student.model";


// query
// query on model
export const createStudentToDB =async()=>{

    const student = new StudentModel({
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
    });
    await student.save();
    return student;
}