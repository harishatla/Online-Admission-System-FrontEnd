import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../add-application/application.service';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  applicationId = 0
  applicationStatus: string=''
  myError: string=''
  applicationName: string=''
  applicationMessage: string=''
   

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
  }
  checkStatus(applicationId: number){
    this.myError=''
    this.applicationName=''
    this.applicationStatus=''
    this.applicationMessage=''
    this.applicationService.getApplicationId(applicationId).subscribe((response) => {
      this.applicationStatus = response.applicationStatus
      if(this.applicationStatus=='Approved'){
        this.applicationMessage= 'your application is approved '

      }
      else{
        this.applicationMessage='your application is pending'
      }
      this.applicationName = response.applicantFuLLName
    },
    (error) => {
     this.myError = error.error.message; 
    });

  }

}
