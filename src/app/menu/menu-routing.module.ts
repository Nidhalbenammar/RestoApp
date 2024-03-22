import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { AffichageMenuComponent } from './affichage-menu/affichage-menu.component';

const routes: Routes = [
  {path:"gestion-menu",component:GestionMenuComponent},
  {path:"add-menu",component:AddMenuComponent},
  {path:"menu-details/:id",component:MenuDetailsComponent},
  {path:"update-menu/:id",component:UpdateMenuComponent},
  {path:"affichage-menu",component:AffichageMenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
 
 }
