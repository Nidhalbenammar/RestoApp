import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private authService: AuthService) {
    
    this.getAllEtudiants;
  
    
  }
  registerRequestetud: any = {};
  registerRequestchef: any = {};
  updatedEtudiant: any = {}; 
  updatedChef:any={};
  etudiants: any[] = [];
  chefs: any[] = [];
  nombredeplaces: number = 0;

  ngOnInit() {
    this.getAllEtudiants();
    this.getAllChefs();
    this.getNombreDePlaces();

  }
  
  signupEtudiant(){
    this.authService.registerStudent(this.registerRequestetud).subscribe(
      response=>{
        Swal.fire({
          icon: 'success',
          title: 'etudiant ajouter avec succès',
          showConfirmButton: false,
          timer: 1500});
        console.log('Signup successful for student:',response);
      },
      error =>{
        console.error('signup error for student:',error);
      }
    )
  }


  signupChef(){
    this.authService.registerChef(this.registerRequestchef).subscribe(
      response=>{
        Swal.fire({
          icon: 'success',
          title: 'chef ajouter avec succès',
          showConfirmButton: false,
          timer: 1500});
        console.log('Signup successful for Chef:',response);
      },
      error =>{
        console.error('signup error for Chef:',error);
      }
    )
  }
  getAllEtudiants(): void {
    this.authService.getAllEtudiants().subscribe(
      data => {
        this.etudiants = data;
      },
      error => {
        console.error('Erreur lors de la récupération des étudiants :', error);
      }
    );
  }
  getAllChefs(): void {
    this.authService.getChefs().subscribe(
      data => {
   this.chefs=data;
       
        // Traitez les données ici, par exemple, affectez-les à une propriété pour les afficher dans le template
      },
      (error) => {
        console.error('Erreur lors de la récupération des chefs:', error);
      }
    );
  }

  deleteEtudiant(id: number): void {
    this.authService.deleteEtudiant(id).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'etudiant supprimé avec succès',
          showConfirmButton: false,
          timer: 1500});
        console.log('Étudiant supprimé avec succès');
        // Actualisez la liste des étudiants après la suppression si nécessaire
        this.getAllEtudiants();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'étudiant:', error);
      }
    );
  }

  deleteChef(id: number): void {
    this.authService.deleteChef(id).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'chef supprimé avec succès',
          showConfirmButton: false,
          timer: 1500});
      
        // Actualisez la liste des chefs après la suppression si nécessaire
        this.getAllChefs();
      },
      (error) => {
        console.error('Erreur lors de la suppression du chef:', error);
      }
    );


    
  }
  updateEtudiant(id: number, updatedEtudiant: any): void {
    this.deleteEtudiant(id);

    this.authService.registerStudent(updatedEtudiant).subscribe(
      response=>{
        Swal.fire({
          icon: 'success',
          title: 'update avec succès',
          showConfirmButton: false,
          timer: 1500});
        console.log('Signup successful for student:',response);
      },
      error =>{
        console.error('signup error for student:',error);
      }
    )
  }

  // Fonction pour mettre à jour un chef
  updateChef(id: number, updatedChef: any): void {
 this.deleteChef(id);
 
  this.authService.registerChef(updatedChef).subscribe(
    response=>{
      Swal.fire({
        icon: 'success',
        title: 'update chef avec succès',
        showConfirmButton: false,
        timer: 1500});
      console.log('Signup successful for Chef:',response);
    },
    error =>{
      console.error('signup error for Chef:',error);
    }
  )
    
  }


  
  getNombreDePlaces() {
    this.authService.getnombredeplaces().subscribe(
      (nombre: number) => {
        this.nombredeplaces = nombre;
      },
      (error) => {
        console.error('Erreur lors de la récupération du nombre de places:', error);
      }
    );
  }



}