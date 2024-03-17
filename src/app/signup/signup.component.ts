import { Component } from '@angular/core';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  Nom: string = '';
  Prenom: string = '';
  numeroEtudiant: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  constructor(private _sig:SignupService){

  }
  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const registerDto = {
      nom: this.Nom,
      prenom: this.Prenom,
      numeroEtudiant: this.numeroEtudiant,
      email: this.email,
      password: this.password
    };

    this._sig.signupEtudiant(registerDto).subscribe(
      response => {
        console.log('User signed up successfully', response);
      },
      error => {
      
        console.error('Error signing up user', error);
        this.errorMessage = 'An error occurred while signing up';
      }
    );
  }
}