import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuService } from '../service/menu.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  menuForm:any;
  menus:any;
  constructor(private fb:FormBuilder, private ms:MenuService, private router:Router){
    this.menuForm=this.fb.group({
      id:[],
      date:[],
      descriptionPlat:[],
      dessert:[],
      qteDisponible:[],
      supplement:[]

    });
   
  }
  addPlat(){
    this.ms.addMenu(this.menuForm.value).subscribe((data)=>{
      console.log('Menu item added successfully');
      this.showAlert();
      this.router.navigate(['/gestion-menu']);
    });
  }
  async showAlert() {
    const { value: success } = await Swal.fire({
      title: 'Added successfully!',
      text: '',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500 
    });} 
}
