 import { College } from "./college";
 import { Course } from "./course";
 import { Branch } from "./branch";
 import { Payment } from "src/app/payment/payment";
 import { Admission } from "./admission";
import { CoursePojo } from "./coursePojo";
import { BranchPojo } from "./branchPojo";

export interface Application{
    applicationId: number,
    applicantFuLLName: string,
    dateOfBrith: number,
    highestQualification: string,
    highestQualificationPercentage: number,
    applicationStatus: string
    email: string,
    admissionPojo: Admission
    coursePojo: Course
    branchPojo: Branch
    collegePojo: College,
    paymentPojo: Payment
 

}