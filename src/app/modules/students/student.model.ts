import { Model, Schema, model } from "mongoose";
import { StudentsInterfaceMethods, StudentsInterface } from "./student.interface";


// custom instance method model creation
// Create a new Model type that knows about IUserMethods...
type StudentMethodModel = Model<StudentsInterface, {}, StudentsInterfaceMethods>;


// - step2 : Schema


// creating Schema using Interface
const studentSchema = new Schema<StudentsInterface,StudentMethodModel,StudentsInterfaceMethods>({
    
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


// custom instance method model creation
// Create a new Model type that knows about IUserMethods...
// declare the method
studentSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });




// - step3 : Model
// creating a Model 
// create an instance from the model
const StudentModel = model<StudentsInterface,StudentMethodModel>('StudentModel', studentSchema);






export default StudentModel;