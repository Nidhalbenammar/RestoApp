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

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });

    return this.http.post<any>(this.baseUrl, { email, password }, { headers: headers }).pipe(
      tap(response => {    
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );      
  }
}
