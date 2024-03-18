import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChefComponent } from './chef/chef.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"chef",component:ChefComponent},
  {path:"etudiant",component:EtudiantComponent}
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
