import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl='http://localhost:8120';
  constructor(private http: HttpClient) { }

  register(userData: users): Observable<users>{
    return this.http.post<users>(this.baseUrl +'/register', userData);
  }

  login(userData: users): Observable<users>{
    return this.http.post<users>(this.baseUrl +'/authenticate', userData);
  }

}
