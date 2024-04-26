import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChefComponent } from './chef/chef.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { etudiantGuard } from './etudiant/guard/etudiant.guard';
import { chefGuard } from '../menu/guard/chef.guard';
import { adminGuard } from './admin/admin.guard';
import { TransactionComponent } from './etudiant/transaction/transaction.component';
import { AddPropositionComponent } from '../menu/propositions/add-proposition/add-proposition/add-proposition.component';
import { ListePropsitionsComponent } from '../menu/propositions/liste-propositions/liste-propsitions/liste-propsitions.component';


const routes: Routes = [
  {path:"admin",component:AdminComponent,canActivate:[adminGuard]},
  {path:"chef",component:ChefComponent,canActivate:[chefGuard]},
  {path:"etudiant",component:EtudiantComponent,canActivate:[etudiantGuard]},
  {path:"etudiantTra",component:TransactionComponent,canActivate:[etudiantGuard]},
  {path:"add-propositions",component:AddPropositionComponent,canActivate:[etudiantGuard]},
  {path:"liste-propositions",component:ListePropsitionsComponent,canActivate:[etudiantGuard]}
  
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
