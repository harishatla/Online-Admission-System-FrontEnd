import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/Studentview/add-application/application';
import { ApplicationService } from 'src/app/Studentview/add-application/application.service';

@Component({
  selector: 'app-rejected-applications',
  templateUrl: './rejected-applications.component.html',
  styleUrls: ['./rejected-applications.component.css']
})
export class RejectedApplicationsComponent implements OnInit {

  allApplications: Application[] = [];
  
  myError = '';

  constructor(private router: Router,
    private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.getAllApplications().subscribe((response) => {
      console.log(response);
      this.allApplications = response.filter(application => 
        application.applicationStatus == 'Rejected');
        console.log(this.allApplications)
        console.log(this.allApplications)
    },
    (error) => {
      console.log(error);
      console.log(error.error.message);
     this.myError = error.error.message;
    });
 
  }

}
