import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginRequest).subscribe(
      response => {
       
        console.log('Login successful:', response);
        localStorage.setItem('jwt',response.jwt);
        const userRole = localStorage.getItem('userRole');
        console.log('User role:', userRole);
        if (this.authService.getUserRole()=='CHEF') {
          this.router.navigate(['/chef']);
        } else if (this.authService.getUserRole()==('ETUDIANT')) {
          this.router.navigate(['/etudiant']);
        } else {
          this.router.navigate(['/admin']);
        }
        
      },
      error => {
        console.error('Login error:', error);
        // Gérer les erreurs de connexion (afficher un message d'erreur, réinitialiser le formulaire, etc.)
      }
    );
  }
}