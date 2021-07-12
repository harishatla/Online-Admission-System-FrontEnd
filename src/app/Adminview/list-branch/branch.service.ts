import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/users/auth.service';
import { branch } from './branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  baseUrl =  "http://localhost:8120/api/branches";
 
  constructor(private http: HttpClient, private authService: AuthService) { }
 
  getHttpOtions(){
    let httpOptions = {};
    let branchData: any = '';
   branchData = this.authService.retrieveUserdetails();
   if(branchData!=null){
    let token = JSON.parse(branchData).token;
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
 
  getAllBranches(): Observable<branch[]>{
   return this.http.get<branch[]>("http://localhost:8120/api/branches", this.getHttpOtions());
  }
  
 
  addBranch(newBranch: branch): Observable<branch[]>{
    return this.http.post<branch[]>(this.baseUrl, newBranch,this.getHttpOtions());
  }
 
  
 
  getBranch(branchId: number): Observable<branch>{
    return this.http.get<branch>("http://localhost:8120/api/branches/"+branchId,this.getHttpOtions())
  }
 
  
 
  updateBranch(updateBranch: branch): Observable<branch[]>{
    return this.http.put<branch[]>("http://localhost:8120/api/branches", updateBranch,this.getHttpOtions());
  }

   
}
