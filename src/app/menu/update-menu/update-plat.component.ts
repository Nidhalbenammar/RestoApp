import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MenuService } from '../../services/menu.service';
import { Menu } from 'src/app/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {
  id!: number;
  plat: Menu = new Menu(0,new Date(), '', '', 0, '');

  updateForm: FormGroup; 

  errorMessage: string = '';

  constructor(private ps: MenuService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.updateForm = this.fb.group({
      date: [''], 
      description: [''], 
      dessert: [''], 
      qteDisponible: [''],
      supplement: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ps.getMenuById(this.id).subscribe((data: Menu) => { 
      this.plat = data;
      this.updateForm.patchValue({
        date: this.plat.date,
        description: this.plat.descriptionPlat,
        dessert: this.plat.dessert,
        qteDisponible: this.plat.qteDisponible,
        supplement: this.plat.supplement
      });
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const platData: Menu = {
        id: this.id,
        supplement: this.updateForm.value.supplement,
        date: this.updateForm.value.date,
        descriptionPlat: this.updateForm.value.description,
        dessert: this.updateForm.value.dessert,
        qteDisponible: this.updateForm.value.qteDisponible
      };
      
      this.ps.updateMenu(this.id, platData).subscribe(() => {
        this.router.navigate(['/gestion-menu']);
      }, error => {
        console.error('Error updating menu:', error);
      });
    }
  }
  
}
