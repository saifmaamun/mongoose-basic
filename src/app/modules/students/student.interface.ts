// - step1 : Interface
// creating interface

export interface StudentsInterface {
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


// custom interface methods
export interface StudentsInterfaceMethods {
    fullName(): string;
  }