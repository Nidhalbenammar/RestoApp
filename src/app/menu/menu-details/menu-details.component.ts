import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plat } from '../../plat';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  id!: number;
  plat: Plat = new Plat(0, '', '', 0, '', new Date());

  constructor(private ps: MenuService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.updateForm = this.fb.group({
      nom: [''], // Define 'nom' FormControl with required validator
      date: [''], // Define 'date' FormControl with required validator
      description: [''], // Define 'description' FormControl
      dessert: [''], // Define 'dessert' FormControl
      qteDisponible: [''] // Define 'qteDisponible' FormControl with required validator
    });
  }

  updateForm: FormGroup; // Declare FormGroup variable
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
}
