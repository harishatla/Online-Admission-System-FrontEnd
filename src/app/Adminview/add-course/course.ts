 //import { College } from "src/app/Studentview/add-application/college";
import { Branch } from "./branch";
import { College } from "./college";
 

export interface Course{
    courseId: number,
    courseName: string,
    eligibility: string,
    collegePojo: College,
    allBranchesPojo:Branch[]
}