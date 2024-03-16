import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = 'http://localhost:9092/signup'; 
  constructor(private http: HttpClient) { }

  signup(email: string, password: string, name: string): Observable<any> {
    const userData = { email, password, name };
    return this.http.post<any>(this.baseUrl, userData);
  }
}