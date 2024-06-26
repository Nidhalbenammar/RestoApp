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
  menuForm: any;
  menuAdded = false; // Flag to track if a menu has been added

  constructor(private fb: FormBuilder, private ms: MenuService, private router: Router) {
    this.menuForm = this.fb.group({
      id: [],
      date: [],
      descriptionPlat: [],
      dessert: [],
      qteDisponible: [],
      supplement: []
    });
  }

  addPlat() {
    if (this.menuAdded) {
      this.showAlertError();
      return;
    }

    this.ms.addMenu(this.menuForm.value).subscribe(
      (data) => {
        console.log('Menu item added successfully');
        this.menuAdded = true; 
        this.showAlert();
        //this.router.navigate(['/gestion-menu']);
      },
      (error) => {
        console.error('Error adding menu item:', error);
      }
    );
  }

  async showAlert() {
    const { value: success } = await Swal.fire({
      title: 'Added successfully!',
      text: '',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  }

  async showAlertError() {
    const { value: error } = await Swal.fire({
      title: 'You can only add one menu per day!',
      text: '',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
