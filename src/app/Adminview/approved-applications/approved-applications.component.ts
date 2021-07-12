import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/Studentview/add-application/application';
import { ApplicationService } from 'src/app/Studentview/add-application/application.service';

@Component({
  selector: 'app-approved-applications',
  templateUrl: './approved-applications.component.html',
  styleUrls: ['./approved-applications.component.css']
})
export class ApprovedApplicationsComponent implements OnInit {
  
  allApplications: Application[] = [];
  myError = '';

  constructor(private router: Router,private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.getAllApplications().subscribe((response) => {
      console.log(response);
      this.allApplications = response.filter(application => 
        application.applicationStatus == 'Approved');
        console.log(this.allApplications)
    },
    (error) => {
      console.log(error);
      console.log(error.error.message);
     this.myError = error.error.message;
    });
 
  }

}
