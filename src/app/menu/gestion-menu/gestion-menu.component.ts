import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuService } from '../service/menu.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.component.html',
  styleUrls: ['./gestion-menu.component.css']
})
export class GestionMenuComponent implements OnInit {
  menuForm:any;
  menus:any;
  constructor(private fb:FormBuilder, private ms:MenuService, private router:Router){
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
  updateMenu(id :number){
    this.router.navigate(['update-menu',id])
   }
   viewDetails(id :number){
    this.router.navigate(['menu-details',id])
   }
   deleteMenu(id: number) {
    this.ms.deleteMenu(id).subscribe(() => {
      console.log('Menu item deleted successfully');
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.showAlert();
      this.router.navigate([this.router.url]);
    }, error => {
      console.error('Error deleting menu item:', error);
    });
  }
  async showAlert() {
    const { value: success } = await Swal.fire({
      title: 'Deleted successfully!',
      text: '',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500 
    });} 
  
}
