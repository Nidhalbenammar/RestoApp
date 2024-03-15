import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string ='';
  password:string ='';
  error:string ='';
  constructor(private s:LoginService){

  }

  OnSubmit() {
    this.s.login(this.email, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
      },
      error => {
        console.error('Login error:', error);
      }
    );
  }
}