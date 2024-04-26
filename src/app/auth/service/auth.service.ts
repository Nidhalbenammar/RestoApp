import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:9092/";
  private baseChefUrl = 'http://localhost:9092/api/chef';
  private baseEtudiantUrl = 'http://localhost:9092/api/etudiant';
  private nombreplaces = 'http://localhost:9092/api/restaurant';

  constructor(private http: HttpClient, private router:Router) { }

  registerStudent(SignupRequest: any): Observable<any> {
    SignupRequest.role= 'ETUDIANT';
    const url = this.baseUrl + 'signup/etudiant';
    return this.http.post(url, SignupRequest);
  }

  registerChef(SignupRequest: any): Observable<any> {
    SignupRequest.role= 'CHEF';
    const url = this.baseUrl + 'signup/chef';
    return this.http.post(url, SignupRequest);
  }

  registerAdmin(SignupRequest: any): Observable<any> {
    SignupRequest.role= 'ADMIN';
    const url = this.baseUrl + 'signup/admin';
    return this.http.post(url, SignupRequest);
  }
  login(loginRequest: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + "login", loginRequest).pipe(
      map(response => {
      
        if (response && response.jwt) {
          localStorage.setItem('jwt', response.jwt);
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('userRole', response.role);
        }
        return response;
      })
    );
  }

  saveTokenAndRole(token: string, roles: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', roles);

  }
  

  getUserRole(): string | null | boolean {
    if (!this.isLoggedIn()) {
      return false;
    } else {
      return localStorage.getItem('userRole');
    }
  }

  createAuthorizationHeader(): HttpHeaders {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return new HttpHeaders();
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('jwt') != null;
  }
  logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['/acceuil']);
  }
  isLoggedIn(): boolean {
    const isLoggedIn = !!localStorage.getItem('jwt');
    if (isLoggedIn) {

    }
    return isLoggedIn;
  }
   
  getAllEtudiants(): Observable<any[]> {
    // Utilisez les en-têtes d'authentification fournis par `AuthService`
    const headers = this.createAuthorizationHeader();
    
    // Faites la requête GET pour récupérer les étudiants
    return this.http.get<any[]>(this.baseEtudiantUrl, { headers: headers });
}

getChefs(): Observable<any[]> {
  const headers = this.createAuthorizationHeader();
  return this.http.get<any[]>(this.baseChefUrl, { headers: headers });
}

deleteEtudiant(id: number): Observable<any> {
  const headers = this.createAuthorizationHeader();
  const url = `${this.baseEtudiantUrl}/${id}`;
  return this.http.delete(url, { headers: headers });
}

deleteChef(id: number): Observable<any> {
  const headers = this.createAuthorizationHeader();
  const url = `${this.baseChefUrl}/${id}`;
  return this.http.delete(url, { headers: headers });
}

updateEtudiant(id: number, updatedEtudiant: any): Observable<any> {
  const url = `${this.baseUrl}/api/etudiant/${id}`;
  return this.http.put(url, updatedEtudiant);
}

// Fonction pour mettre à jour un chef
updateChef(id: number, updatedChef: any): Observable<any> {
  const url = `${this.baseUrl}/api/chef/${id}`;
  return this.http.put(url, updatedChef);
}

getToken() {
  // Retourne le token JWT
  return 'votre_token_jwt';
}
getnombredeplaces(): Observable<number> {
  const headers = this.createAuthorizationHeader();
  return this.http.get<number>(this.nombreplaces, { headers: headers });
}
 

}