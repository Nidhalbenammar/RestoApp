import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { JwtServiceService } from '../services/jwt-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private s: LoginService,
    private router: Router,
    private jwtService: JwtServiceService
  ) { }

  onSubmit() {
    const loginRequest = { email: this.email, password: this.password };

    this.s.login(loginRequest).subscribe(
      response => {
        console.log('Token:', response.jwt);
        localStorage.setItem('jwt', response.jwt);

        const decodedToken = this.jwtService.decodeToken(response.jwt);
        const roles = decodedToken.roles; 
        
        console.log('User roles:', roles);

        if (roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin']);
        } else if (roles.includes('ROLE_ETUDIANT')) {
          this.router.navigate(['/etudiant']);
        } else {
          this.router.navigate(['/chef']);
        }
      },
      error => {
        console.error('Login error:', error);
        this.router.navigate(['/acceuil']);
      }
    );
  }
}
