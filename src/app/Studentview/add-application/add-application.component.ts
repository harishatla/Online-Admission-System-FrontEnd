import { Component, OnInit } from '@angular/core';
import { Application } from './application';
import { ApplicationService } from './application.service';
import { College } from './college';
import { CoursePojo } from './coursePojo';
import { BranchPojo } from './branchPojo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})



export class AddApplicationComponent implements OnInit {

  allColleges: College[] = [];
  allCourses: CoursePojo[]= [];
  allBranches: BranchPojo[]=[];
  applicationById: any
  myError = '';

  // nested object creation
  //Created Objected to bind the form data
  addApplicationData: Application = {
    applicationId:0,   
    applicantFuLLName: "",
    dateOfBrith: 0,
    highestQualification: "",
    highestQualificationPercentage: 0, 
    email: " ",
    applicationStatus: "Pending",
    admissionPojo:{
      admissionId: 0,
      year: 0,
    },
    coursePojo: {
                courseId: 0,
                courseName: " ",
                eligibility: " "
    },
     branchPojo : {
                         branchId : 0,
                         branchName : " " ,
                         branchDescription : " "
    },
     collegePojo : {
         ...this.allColleges[0]
         
         
    },
     paymentPojo : {

        paymentId:0,
        paymentAmount : 500.0,
        paymentDescription : "Application Fee of Rs 500 paid",
        paymentDate : new Date(),
        paymentStatus : "Paid"
    }
}

  constructor(private applicationService: ApplicationService,private router: Router
  ) { }

  //getting college and course details while loading
  ngOnInit(): void {
      this.applicationService.getCollege().subscribe((response) => {
      this.allColleges = response;
      this.addApplicationData.collegePojo = this.allColleges[0]
      this.allCourses = [...this.allColleges[0].allCoursesPojo]
    },
      (error) => {
        console.log(error.error.message);
        this.myError = error.error.message;
      });
  }

  //calling addApplication method in the service layer by sending data
  //routing to acknowledgement component and submitting form
  addApplication() {
      this.applicationService.addApplication(this.addApplicationData).subscribe(response =>{
      this.addApplicationData = response
      this.router.navigate(['acknowledgement/',this.addApplicationData.applicationId]);

    });
    
    }
   
  setBranch(event: any){
    this.addApplicationData.branchPojo.branchId = event.target.value
    
  }

  loadBranches(event: any){
    this.addApplicationData.coursePojo.courseId = event.target.value
    
    for(let i=0; i<this.allCourses.length;i++){
      if(this.allCourses[i].courseId == this.addApplicationData.coursePojo.courseId){
        this.allBranches = this.allCourses[i].allBranchesPojo;
        break;
      }
    }
  }
}

