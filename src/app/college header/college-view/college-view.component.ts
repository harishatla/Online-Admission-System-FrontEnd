import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { CollegeViewService } from './college-view.service';

@Component({
  selector: 'app-college-view',
  templateUrl: './college-view.component.html',
  styleUrls: ['./college-view.component.css']
})
export class CollegeViewComponent implements OnInit {

  constructor(private collegeviewService: CollegeViewService, 
               private router: Router,
               private authService: AuthService) { 
  }

  ngOnInit(): void {
  }

  getUser(): boolean{
    let userData = this.authService.retrieveUserdetails();
    let isAvailable = userData == null ? false : true;
    return isAvailable;
  }

  

}
