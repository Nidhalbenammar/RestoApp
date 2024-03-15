import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import required form modules
import { MenuService } from '../../services/menu.service';
import { Plat } from '../../plat';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {
  id!: number;
  plat: Plat = new Plat(0, '', '', 0, '', new Date());

  updateForm: FormGroup; // Declare FormGroup variable

  errorMessage: string = ''; // Variable to store error message

  constructor(private ps: MenuService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.updateForm = this.fb.group({
      nom: ['', Validators.required], // Define 'nom' FormControl with required validator
      date: ['', Validators.required], // Define 'date' FormControl with required validator
      description: [''], // Define 'description' FormControl
      dessert: [''], // Define 'dessert' FormControl
      qteDisponible: ['', Validators.required] // Define 'qteDisponible' FormControl with required validator
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ps.getMenuById(this.id).subscribe((data: Plat) => { 
      this.plat = data;
      // Set form values when data is fetched
      this.updateForm.patchValue({
        nom: this.plat.nom,
        date: this.plat.date,
        description: this.plat.description,
        dessert: this.plat.dessert,
        qteDisponible: this.plat.qteDisponible
      });
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const platData: Plat = {
        id: this.id,
        nom: this.updateForm.value.nom,
        date: this.updateForm.value.date,
        description: this.updateForm.value.description,
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
