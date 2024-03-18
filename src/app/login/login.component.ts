import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  constructor(private s:LoginService,private router:Router){

    } 
       onSubmit() {
      const loginRequest = { email: this.email, password: this.password };
   
      this.s.login(loginRequest).subscribe(
      response => {
      console.log('Token:',  response.jwt);
      localStorage.setItem('jwt', response.jwt);
      localStorage.setItem('userRole', response.userRole);
      console.log('Login successful:', response);
      this.router.navigate(['/signup']);
    },
    error => {
      console.error('Login error:', error);
      this.router.navigate(['/acceuil']);
    }
  );
}
}