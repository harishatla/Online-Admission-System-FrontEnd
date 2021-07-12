import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../add-application/application';
import { ApplicationService } from '../add-application/application.service';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.css']
})
export class AcknowledgementComponent implements OnInit {

  applications: Application[] = [];
  myError = '';
  editForm: any;

  constructor(private router: Router,
              private applicationService: ApplicationService,  
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    let applicationId: any = this.activatedRoute.snapshot.paramMap.get('applicationId');
    this.applicationService.getApplicationId(applicationId).subscribe((response) => {
    this.applications.push(response)
     
  },
    (error) => {
     this.myError = error.error.message;
    });
  }
}
