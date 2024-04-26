import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class PropositionsService {
  baseUrl='http://localhost:9092/api/proposition';
  constructor(private http:HttpClient,private auths:AuthService) { }
  headers=this.auths.createAuthorizationHeader();
  getAll(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl, { headers :this.headers!});
  }
  addProposition(proposition:any){
    return this.http.post<any>(this.baseUrl,proposition, { headers :this.headers!});
    }
    updateVote(proposition: any): Observable<any> {
      const url = `${this.baseUrl}/${proposition.id}`;
      return this.http.put<any>(url, proposition, { headers: this.headers! });
    }

}
