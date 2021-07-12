import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/Studentview/add-application/application.service';
import { Branch } from 'src/app/Studentview/add-application/branch';
import { BranchService } from '../list-branch/branch.service';
import { CourseService } from '../list-course/course.service';
import { College } from './college';
 
 
 
import { Course } from './course';
 
 
 

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  myError = '';
  allColleges: College[] = []
  allCoursesPojo: Course[]=[];
  allBranchesPojo: Branch[] =[];
  collegeRegId=0
  branchId=0
  branchName=''
  allNewBranches: Branch[]=[];
  
  

  ngOnInit(): void {
    console.log("ngOnInit")

    this.applicationService.getCollege().subscribe((response) => {
      this.allColleges = response;
      this.collegeRegId = this.allColleges[0].collegeRegId
      
 
    },
      (error) => {
        this.myError = error.error.message;
      });
       this.branchService.getAllBranches().subscribe((response) => {
         this.allBranchesPojo = response
         this.branchId = this.allBranchesPojo[0].branchId
         this.branchName = this.allBranchesPojo[0].branchName
       });



  }
  addBranches(branch: string){
     
    this.allBranchesPojo.forEach(eachBranch => {
      if(eachBranch.branchId == +branch){
        this.allNewBranches.push(eachBranch)
      }
    })
  }

  addCourse(){
    this.addCourseData.allBranchesPojo= [...this.allNewBranches]
    this.addCourseData.collegePojo={...this.allColleges[0]}
     
    this.courseService.addCourse(this.addCourseData).subscribe((response) =>{
      this.router.navigate(['list-course']);

    });
  }
  constructor(private applicationService:ApplicationService, private router: Router,private branchService: BranchService,private courseService: CourseService) { }

  addCourseData: Course={
  
    courseId: 0,
    courseName: '',
    eligibility: '',
    collegePojo: {
      collegeRegId: 0
    },
    allBranchesPojo:  []

  }
}
 

