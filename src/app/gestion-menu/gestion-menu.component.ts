import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.component.html',
  styleUrls: ['./gestion-menu.component.css']
})
export class GestionMenuComponent implements OnInit {
  menuForm:any;
  menus:any;
  constructor(private fb:FormBuilder, private ms:MenuService){
    this.menuForm=this.fb.group({
      id:[],
      description:[],
      dessert:[],
      qteDisponible:[]

    });
  }
  
  ngOnInit(): void {
    this.ms.getMenu().subscribe((data) =>{
    this.menus=data;
    console.log(data);
    });
  }

  /*addPlat(){
    this.ms.addMenu(this.menuForm.value).subscribe((data)=>{
      console.log(data);
    })
  }*/

}
