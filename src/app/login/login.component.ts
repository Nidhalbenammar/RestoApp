import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string ='';
  password:string ='';
  error:string ='';
  constructor(private s:LoginService,private router:Router){

  }

  onSubmit() {
    this.s.login(this.email, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
        this.router.navigate(['/menu']);
      },
      error => {
        console.log('Login error:');
        this.router.navigate(['/acceuil']);
      }
    );
  }
}