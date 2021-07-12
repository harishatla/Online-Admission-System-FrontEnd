import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addUserData = {
    username: '',
    password: ''
  }
  constructor(private loginService: LoginService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
   
   this.loginService.login(this.addUserData).subscribe((response) => { 
     this.authService.storeUserDetails(JSON.stringify(response));
     this.router.navigate(['collegeview']); 
   },
   (error) => {
     console.log(error);
   });
  }
}

