import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 addUserData = {
   username: '',
   password: ''
 }



  constructor(private loginService: LoginService,
              private router: Router){}
  ngOnInit() {

  }

  register(){
    console.log(this.addUserData);
   this.loginService.register(this.addUserData).subscribe((response) => {
     console.log(response);
     this.router.navigate(['authenticate']);
   },
   (error) => {
     console.log(error);
   });
  }

}

