import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
@Component({
  selector: 'app-historique-menu',
  templateUrl: './historique-menu.component.html',
  styleUrls: ['./historique-menu.component.css']
})
export class HistoriqueMenuComponent implements OnInit {
  menus: any[] = [];
  constructor( private ms:MenuService){
    

  }
    ngOnInit(): void {
      this.ms.getMenu().subscribe((data) =>{
      this.menus=data;
      console.log(data);
      });
  }
}
