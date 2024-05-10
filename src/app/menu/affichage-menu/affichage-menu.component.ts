import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-affichage-menu',
  templateUrl: './affichage-menu.component.html',
  styleUrls: ['./affichage-menu.component.css']
})
export class AffichageMenuComponent implements OnInit {
  menu : any;
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
	   commentaire:"",
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

}
