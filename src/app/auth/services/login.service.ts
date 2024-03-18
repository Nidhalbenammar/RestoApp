import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:9092/login'; 

  constructor(private http: HttpClient) { }

  login(loginRequest: any): Observable<any> {
    return this.http.post(this.baseUrl, loginRequest);
  }
  isLoggedIn(): boolean {
    const isLoggedIn = !!localStorage.getItem('jwt');
    if (isLoggedIn) {
      console.log('User is logged in!');
    }
    return isLoggedIn;
  }
}
