import { HttpClient } from '@angular/common/http';
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
    return this.http.post<any>(this.baseUrl, { email, password }).pipe(
      tap(response => {
        // Handle JWT token here
        if (response && response.token) {
          // Store the token in local storage
          localStorage.setItem('token', response.token);
          // Optionally, handle authentication state or redirect here
        }
      })
    );
  }
}
