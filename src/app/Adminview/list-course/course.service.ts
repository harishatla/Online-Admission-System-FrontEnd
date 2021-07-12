import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/users/auth.service';
import { course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  baseUrl =  "http://localhost:8120/api/courses";
 
  constructor(private http: HttpClient, 
    private authService: AuthService) { }
 
  getHttpOtions(){
    let httpOptions = {};
    let courseData: any = '';
   courseData = this.authService.retrieveUserdetails();
   if(courseData!=null){
    let token = JSON.parse(courseData).token;
    console.log("token:" + token);
     httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
   }
   return httpOptions;
  }
  getAllCourses(): Observable<course[]>{
    return this.http.get<course[]>("http://localhost:8120/api/courses", this.getHttpOtions());
  }
 
  addCourse(newCourse: course): Observable<course[]>{
    return this.http.post<course[]>(this.baseUrl, newCourse, this.getHttpOtions());
  }
 
  getCourse(courseId: number): Observable<course>{
    return this.http.get<course>("http://localhost:8120/api/courses/"+courseId, this.getHttpOtions()
    );
  }
 
  deleteCourse(courseId: number): Observable<course[]>{
    return this.http.delete<course[]>(this.baseUrl + "/" +courseId, this.getHttpOtions());
  }

   
}
