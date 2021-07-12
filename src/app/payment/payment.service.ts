import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../users/auth.service';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = "http://localhost:8120/api/payments";

  constructor(private http: HttpClient,
    private authService: AuthService) { }    

    getHttpOptions(){
      let httpOptions = {};
      let userData: any = '';
      userData = this.authService.retrieveUserdetails();
      if(userData!=null){
        let token = JSON.parse(userData).token;
        console.log("token:" + token);
        httpOptions =  {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + token
        })
      }
      }
     return httpOptions;
    }
  
  getAllPayments(): Observable<Payment[]>{
    
    return this.http.get<Payment[]>(this.baseUrl, this.getHttpOptions());
  }
}
