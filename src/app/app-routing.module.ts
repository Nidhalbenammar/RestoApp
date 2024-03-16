import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GestionMenuComponent } from './menu/gestion-menu/gestion-menu.component';
import { AffichageMenuComponent } from './menu/affichage-menu/affichage-menu.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { UpdatePlatComponent } from './menu/update-plat/update-plat.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'header',component: HeaderComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'gestion-menu',component:GestionMenuComponent},
  {path:'affichage-menu',component:AffichageMenuComponent},
  {path:'add-menu',component:AddMenuComponent},
  {path:'update-plat/:id',component:UpdatePlatComponent},
  {path:'menu-details/:id',component:MenuDetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'update-plat/:id',component:UpdatePlatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
