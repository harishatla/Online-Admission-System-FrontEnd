import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/users/auth.service';
import { Application } from './application';
import { College } from './college';

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  baseUrl = "http://localhost:8120/api/applications";

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getHttpOptions(){
    let httpOptions = {};
    let userData: any = '';
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

addApplication(newApplication: Application): Observable<Application>{
  return this.http.post<Application>(this.baseUrl, newApplication);
}

getCollege( ): Observable<College[]>{
  return this.http.get<College[]>("http://localhost:8120/api/colleges");
}
getAllApplications(): Observable<Application[]>{
  return this.http.get<Application[]>(this.baseUrl);
}
getApplicationId(applicationId: number): Observable<Application>{
  return this.http.get<Application>(this.baseUrl + "/" + applicationId);
}
updateApplication(updateApplication: Application): Observable<Application>{
  return this.http.put<Application>(this.baseUrl, updateApplication);
}
}
