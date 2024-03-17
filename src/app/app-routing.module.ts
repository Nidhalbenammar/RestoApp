import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GestionMenuComponent } from './menu/gestion-menu/gestion-menu.component';
import { AffichageMenuComponent } from './menu/affichage-menu/affichage-menu.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { UpdatePlatComponent } from './menu/update-menu/update-plat.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  {path:'header',component: HeaderComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'gestion-menu',component:GestionMenuComponent},
  {path:'affichage-menu',component:AffichageMenuComponent},
  {path:'add-menu',component:AddMenuComponent},
  {path:'update-plat/:id',component:UpdatePlatComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'menu-details/:id',component:MenuDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }