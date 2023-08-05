import { Injectable } from '@angular/core';

//My imports authrntication requests controll
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  //Login authentication method

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',{
        email, password
      },
      httpOptions
    );
  }

// Method for user registration
  register(name: string, email: string, password: string, roles: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        name, email, password, roles
      },
      httpOptions
    );
  }

// Method for user logout

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions );
  }



}
