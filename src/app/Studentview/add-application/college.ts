import { application } from "src/app/payment/application";
import { Branch } from "./branch";
import { Course } from "./course";
import { CoursePojo } from "./coursePojo";

export interface College{
    collegeRegId: number,
    collegeName: string,
    collegeCity: string,
    collegeState: string,
    allCoursesPojo: CoursePojo[] ,
     
     
}