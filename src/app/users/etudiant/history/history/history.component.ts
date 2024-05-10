import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MenuService } from 'src/app/menu/service/menu.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  menus: any[] = [];
  private baseUrl = "http://localhost:9092/listerAvis";
  avis: any[] = [];
        headers=this.as.createAuthorizationHeader();
  constructor(protected ms:MenuService,protected as:AuthService,private http:HttpClient){}
  
  ngOnInit(): void {
    this.lesAvis(); 
     console.log(this.avis);
     console.log("siuu");
  
    }
    lesAvis() {
      this.http.get<any[]>(this.baseUrl, { headers: this.headers })
        .subscribe(
          (data) => {
            this.avis= data; 
            console.log(this.avis);
            console.log("siuuu");
            this.avis.forEach(av => {
              this.ms.getMenuById(av.menuId).subscribe(menu => {
                this.menus.push(menu); 
              });
            });
          },
          (error) => {
            console.error('Error', error); 
          }
        );
    }
 
 

}