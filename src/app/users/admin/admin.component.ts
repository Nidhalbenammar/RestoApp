import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private authService: AuthService) {}
  registerRequest: any = {};

   

  
  signupEtudiant(){
    this.authService.registerStudent(this.registerRequest).subscribe(
      response=>{
        console.log('Signup successful for student:',response);
      },
      error =>{
        console.error('signup error for student:',error);
      }
    )
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