import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Plat } from '../plat';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {
  id: number | undefined;
  constructor(private ps:MenuService, private acr:ActivatedRoute){}
  plat: any;

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id'];
    this.ps.getMenuById(this.id).subscribe(data =>{
      this.plat=data;
    })
  }
}
