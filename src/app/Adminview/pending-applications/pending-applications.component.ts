import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from 'src/app/Studentview/add-application/application';
import { ApplicationService } from 'src/app/Studentview/add-application/application.service';

@Component({
  selector: 'app-pending-applications',
  templateUrl: './pending-applications.component.html',
  styleUrls: ['./pending-applications.component.css']
})
export class PendingApplicationsComponent implements OnInit {

  
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
