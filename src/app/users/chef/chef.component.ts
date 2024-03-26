import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { GestionMenuComponent } from 'src/app/menu/gestion-menu/gestion-menu.component';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AddMenuComponent } from 'src/app/menu/add-menu/add-menu.component';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChefComponent implements OnInit,OnDestroy {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  @ViewChild('dynamicComponentContainer2', { read: ViewContainerRef }) dynamicComponentContainer2!: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, public auth: AuthService, private router:Router) {}
  role=this.auth.getUserRole();
  loadGestionMenu() {
    const factory = this.resolver.resolveComponentFactory(GestionMenuComponent);
    this.dynamicComponentContainer.clear();
    this.dynamicComponentContainer.createComponent(factory);
  }
  loadAddMenu() {
    const factory = this.resolver.resolveComponentFactory(AddMenuComponent);
    this.dynamicComponentContainer.clear();
    this.dynamicComponentContainer.createComponent(factory);
  }
  test:any;
  ngOnInit(){
    this.test=true;
  }
  ngOnDestroy(): void {
    this.test=false;
  }
  gogestionMenu(){
    this.router.navigate(['/gestion-menu']);
  }
  goAddmenu(){
    this.router.navigate(['/add-menu']);
  }
}

