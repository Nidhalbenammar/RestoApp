import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { GestionMenuComponent } from 'src/app/menu/gestion-menu/gestion-menu.component';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AddMenuComponent } from 'src/app/menu/add-menu/add-menu.component';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EtudiantComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  @ViewChild('dynamicComponentContainer2', { read: ViewContainerRef }) dynamicComponentContainer2!: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

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
}
