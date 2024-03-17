import { Component } from '@angular/core';

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
  constructor(){

  }
}
