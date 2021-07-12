import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/Studentview/add-application/application';
import { ApplicationService } from 'src/app/Studentview/add-application/application.service';

@Component({
  selector: 'app-list-applications',
  templateUrl: './list-applications.component.html',
  styleUrls: ['./list-applications.component.css']
})
export class ListApplicationsComponent implements OnInit {

  title: string = "LIST OF Applications...";
 
  allApplications: Application[] = [];
  constructor(private router: Router,
              private applicationService: ApplicationService ) { }
 
  myError = '';
  ngOnInit(): void {
    this.applicationService.getAllApplications().subscribe((response) => {
      console.log(response);
      this.allApplications = response.filter(application => 
        application.applicationStatus == 'Pending');
    },
    (error) => {
      console.log(error);
      console.log(error.error.message);
     this.myError = error.error.message;
    });
 
  }
 
  
  goToAdd(): void{
    this.router.navigate(['application']);
  }
  approve(application: Application){
    application.applicationStatus = 'Approved'
     application.admissionPojo = {
       admissionId: 0,
       year: new Date().getFullYear()
     }
    console.log(application)
    this.applicationService.updateApplication(application).subscribe((response) =>{
      this.applicationService.getAllApplications().subscribe((response) => {
        this.allApplications = response.filter(application => 
          application.applicationStatus == 'Pending');
      },
      (error) => {
        console.log(error);
        console.log(error.error.message); 
       this.myError = error.error.message;
      });
    })
    
  }
  reject(application: Application){
    application.applicationStatus = 'Rejected'
    console.log(application)
    this.applicationService.updateApplication(application).subscribe((response) =>{
      console.log(response);
      this.applicationService.getAllApplications().subscribe((response) => {
        console.log(response);
        this.allApplications = response.filter(application => 
          application.applicationStatus == 'Pending');
      },
      (error) => {
        console.log(error);
        console.log(error.error.message); 
       this.myError = error.error.message;
      });
    })
  }

  

}
