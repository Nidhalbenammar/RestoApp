import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = 'http://localhost:9092/signup'; 

  constructor(private http: HttpClient) { }

  signupEtudiant(registerDto: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.baseUrl}/etudiant`, registerDto, { headers });
  }

 

  
}