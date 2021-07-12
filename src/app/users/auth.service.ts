import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  storeUserDetails(userdata: string){
    sessionStorage.setItem('userData', userdata);
  }
  retrieveUserdetails(){
    return sessionStorage.getItem('userData');
  }
  removeUserDetails(){
    sessionStorage.removeItem('userData');
  }
}
