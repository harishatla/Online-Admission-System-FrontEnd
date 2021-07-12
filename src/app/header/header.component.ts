import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getUser(): boolean{
    let userData = this.authService.retrieveUserdetails();
    let isAvailable = userData == null ? false : true;
    return isAvailable;
  }

}
