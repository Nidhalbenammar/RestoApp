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
  plat: Plat = new Plat(0,new Date(), '', '', 0, '');

  constructor(private ps: MenuService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.updateForm = this.fb.group({ 
      date: [''], 
      descriptionPlat: [''], 
      dessert: [''], 
      qteDisponible: [''],
      supplement: ['']
    });
  }

  updateForm: FormGroup; 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ps.getMenuById(this.id).subscribe((data: Plat) => { 
      this.plat = data;
      this.updateForm.patchValue({
        supplement: this.plat.supplement,
        date: this.plat.date,
        descriptionPlat: this.plat.descriptionPlat,
        dessert: this.plat.dessert,
        qteDisponible: this.plat.qteDisponible
      });
    });
  }
}
