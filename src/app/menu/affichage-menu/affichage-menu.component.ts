import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affichage-menu',
  templateUrl: './affichage-menu.component.html',
  styleUrls: ['./affichage-menu.component.css']
})
export class AffichageMenuComponent implements OnInit {
  menu : any;
  comment:String | undefined;
  private baseUrl = "http://localhost:9092/ajouterAvis";
    userId = localStorage.getItem('userId');
      headers=this.as.createAuthorizationHeader();
  constructor(private ms: MenuService,protected as:AuthService,private http:HttpClient){}
  
  
  
  ngOnInit(): void {
    this.ms.getMenuDuJour().subscribe((data)=>{
     this.menu=data;
     console.log(data);
     
    })
  }
 clicker(){
  console.log(this.vote);
 }
 vote(vote: number) {
    
  const AvisRequest = {
    etudiantId:this.userId,
    menuId:this.menu.id,
	   commentaire:this.comment,
	 note:vote,
    
  };
  
  return this.http.post<any>(this.baseUrl , AvisRequest,{ headers :this.headers!}).subscribe(
    
    response => {
      console.log('success:', AvisRequest.etudiantId);
    },
    error => {
      console.error('Error :', error);
    }
  );
}


  addComment() {
    Swal.fire({
      title: 'Add a Comment',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (cmnt) => {
        this.comment=cmnt;
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }
  submitComplaint() {
    this.ms.getMenuDuJour().subscribe(
      (data) => {
        this.menu = data;
       
        if (!this.menu) {
          Swal.fire('Erreur', 'Menu non disponible', 'error');
          return;
        }
        Swal.fire({
          title: 'Faire une réclamation',
          input: 'textarea',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Soumettre',
          showLoaderOnConfirm: true,
          preConfirm: (content) => {
    
            const complaint = {
              contenu: content,
              etudiantId: this.userId,
              menuId: this.menu.id
              
            };
            
            return this.as.makeComplaint(complaint).toPromise();
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          Swal.fire('Réclamation envoyée!', '', 'success');
        }).catch((error) => {
          Swal.fire('Réclamation envoyée!', '', 'success');
          console.log(error)
        });
      },
      (error) => {
        Swal.fire('Erreur', 'Une erreur est survenue lors de la récupération du menu.', 'error');
      }
    );
  }
  
}