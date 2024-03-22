import { Component } from '@angular/core';
import { SignupRequest } from '../model/signup-request';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerRequest: any = {};
  password2='';
  errorMessage: string | undefined;

  constructor(private authService:AuthService) {}
  signupEtudiant(){
    if (this.password2 !== this.registerRequest.password) {
      this.errorMessage = 'Passwords do not match';
      console.log(this.errorMessage);
    }
    else{
    this.authService.registerStudent(this.registerRequest).subscribe(
      response=>{
        console.log('Signup successful for student:',response);
      },
      error =>{
        console.error('signup error for student:',error);
      }
    )
    }
  }

  signupChef(){
    this.authService.registerChef(this.registerRequest).subscribe(
      response=>{
        console.log('Signup successful for Chef:',response);
      },
      error =>{
        console.error('signup error for Chef:',error);
      }
    )
  }
}