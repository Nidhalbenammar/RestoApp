import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chef-gest',
  templateUrl: './chef-gest.component.html',
  styleUrls: ['./chef-gest.component.css']
})
export class ChefGestComponent {constructor(private authService: AuthService) {
    
  this.getAllEtudiants;


  
}
reclamations: any[] = [];
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
this.getAllReclamations(); 
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










Ajoutetudaint() {
  Swal.fire({
    title: 'Add Student',
    html:
      '<input type="email" id="email" class="swal2-input" placeholder="Enter Email">' +
      '<input type="password" id="password" class="swal2-input" placeholder="Enter Password">' +
      '<input type="text" id="nom" class="swal2-input" placeholder="Enter Last Name">' +
      '<input type="text" id="prenom" class="swal2-input" placeholder="Enter First Name">' +
      '<input type="text" id="num" class="swal2-input" placeholder="Enter The Card Number">' +
      '<input type="text" id="codeSecurite" class="swal2-input" placeholder="Enter Security Code">' +
      '<input type="text" id="solde" class="swal2-input" placeholder="Enter The Amount">',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
      const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
      const nom: HTMLInputElement | null = document.getElementById('nom') as HTMLInputElement;
      const prenom: HTMLInputElement | null = document.getElementById('prenom') as HTMLInputElement;
      const numeroCarte: HTMLInputElement | null = document.getElementById('num') as HTMLInputElement;
      const codeSecurite: HTMLInputElement | null = document.getElementById('codeSecurite') as HTMLInputElement;
      const soldeCarte: HTMLInputElement | null = document.getElementById('solde') as HTMLInputElement;
      
   
      this.registerRequestetud.email = email ? email.value : '';
      this.registerRequestetud.password = password ? password.value : '';
      this.registerRequestetud.nom = nom ? nom.value : '';
      this.registerRequestetud.prenom = prenom ? prenom.value : '';
      this.registerRequestetud.numeroCarte = numeroCarte ? numeroCarte.value : '';
      this.registerRequestetud.codeSecurite = codeSecurite ? codeSecurite.value : '';
      this.registerRequestetud.soldeCarte = soldeCarte ? soldeCarte.value : '';
      
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
      
    },
    allowOutsideClick: () => !Swal.isLoading()
  });


}


modifiertudaint(id: number) {
  Swal.fire({
    title: 'update Student',
    html:
      '<input type="email" id="email" class="swal2-input" placeholder="Enter Email">' +
      '<input type="password" id="password" class="swal2-input" placeholder="Enter Password">' +
      '<input type="text" id="nom" class="swal2-input" placeholder="Enter Last Name">' +
      '<input type="text" id="prenom" class="swal2-input" placeholder="Enter First Name">' +
      '<input type="text" id="num" class="swal2-input" placeholder="Enter The Card Number">' +
      '<input type="text" id="codeSecurite" class="swal2-input" placeholder="Enter Security Code">' +
      '<input type="text" id="solde" class="swal2-input" placeholder="Enter The Amount">',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
      const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
      const nom: HTMLInputElement | null = document.getElementById('nom') as HTMLInputElement;
      const prenom: HTMLInputElement | null = document.getElementById('prenom') as HTMLInputElement;
      const numeroCarte: HTMLInputElement | null = document.getElementById('num') as HTMLInputElement;
      const codeSecurite: HTMLInputElement | null = document.getElementById('codeSecurite') as HTMLInputElement;
      const soldeCarte: HTMLInputElement | null = document.getElementById('solde') as HTMLInputElement;
      
   
      this.registerRequestetud.email = email ? email.value : '';
      this.registerRequestetud.password = password ? password.value : '';
      this.registerRequestetud.nom = nom ? nom.value : '';
      this.registerRequestetud.prenom = prenom ? prenom.value : '';
      this.registerRequestetud.numeroCarte = numeroCarte ? numeroCarte.value : '';
      this.registerRequestetud.codeSecurite = codeSecurite ? codeSecurite.value : '';
      this.registerRequestetud.soldeCarte = soldeCarte ? soldeCarte.value : '';
      
      this.authService.registerStudent(this.registerRequestetud).subscribe(
        response=>{
          Swal.fire({
            icon: 'success',
            title: 'etudiant modifier avec succès',
            showConfirmButton: false,
            timer: 1500});
          console.log('Signup successful for student:',response);
        },
        error =>{
          console.error('signup error for student:',error);
        }
      )
      this.authService.deleteEtudiant(id).subscribe(
        () => {
        
      
          this.getAllEtudiants();
        },)

      
      
    },
    allowOutsideClick: () => !Swal.isLoading()
  });


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




AjouterChef() {
  Swal.fire({
    title: 'Add Chef',
    html:
      '<input type="email" id="email" class="swal2-input" placeholder="Enter Email">' +
      '<input type="password" id="password" class="swal2-input" placeholder="Enter Password">' +
      '<input type="text" id="nom" class="swal2-input" placeholder="Enter Last Name">' +
      '<input type="text" id="prenom" class="swal2-input" placeholder="Enter First Name">',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
      const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
      const nom: HTMLInputElement | null = document.getElementById('nom') as HTMLInputElement;
      const prenom: HTMLInputElement | null = document.getElementById('prenom') as HTMLInputElement;

      this.registerRequestchef.email = email ? email.value : '';
      this.registerRequestchef.password = password ? password.value : '';
      this.registerRequestchef.nom = nom ? nom.value : '';
      this.registerRequestchef.prenom = prenom ? prenom.value : '';

      this.authService.registerChef(this.registerRequestchef).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Chef ajouté avec succès',
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Signup successful for Chef:', response);
        },
        error => {
          console.error('Signup error for Chef:', error);
        }
      );
    },
    allowOutsideClick: () => !Swal.isLoading()
  });
}



ModifierrChef(id:number) {
  Swal.fire({
    title: 'modifier Chef',
    html:
      '<input type="email" id="email" class="swal2-input" placeholder="Enter Email">' +
      '<input type="password" id="password" class="swal2-input" placeholder="Enter Password">' +
      '<input type="text" id="nom" class="swal2-input" placeholder="Enter Last Name">' +
      '<input type="text" id="prenom" class="swal2-input" placeholder="Enter First Name">',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
      const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
      const nom: HTMLInputElement | null = document.getElementById('nom') as HTMLInputElement;
      const prenom: HTMLInputElement | null = document.getElementById('prenom') as HTMLInputElement;

      this.registerRequestchef.email = email ? email.value : '';
      this.registerRequestchef.password = password ? password.value : '';
      this.registerRequestchef.nom = nom ? nom.value : '';
      this.registerRequestchef.prenom = prenom ? prenom.value : '';

      this.authService.registerChef(this.registerRequestchef).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Chef modifier avec succès',
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Signup successful for Chef:', response);
        },
        error => {
          console.error('Signup error for Chef:', error);
        }
      );

      this.authService.deleteChef(id).subscribe(
        () => {
          
          this.getAllChefs();
        },)
    },
    allowOutsideClick: () => !Swal.isLoading()
  });
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

getAllReclamations(): void {
  this.authService.getAllReclamations().subscribe(
    (reclamations) => {
      this.reclamations = reclamations;
      console.log('Liste des réclamations:', reclamations);
    },
    (error) => {
      console.error('Erreur lors de la récupération des réclamations:', error);
    }
  );

}
}