import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
<<<<<<< HEAD
import { GestionMenuComponent } from './menu/gestion-menu/gestion-menu.component';
import { AffichageMenuComponent } from './menu/affichage-menu/affichage-menu.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { UpdatePlatComponent } from './menu/update-plat/update-plat.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
=======
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
import { AffichageMenuComponent } from './affichage-menu/affichage-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { LoginComponent } from './login/login.component';
>>>>>>> 7e15bcc13c6ebeb80f23f223e1bf9efc58a34162

const routes: Routes = [
  {path:'header',component: HeaderComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'gestion-menu',component:GestionMenuComponent},
  {path:'affichage-menu',component:AffichageMenuComponent},
  {path:'add-menu',component:AddMenuComponent},
<<<<<<< HEAD
  {path:'update-plat/:id',component:UpdatePlatComponent},
  {path:'menu-details/:id',component:MenuDetailsComponent}
=======
  {path:'login', component:LoginComponent},
  {path:'update-plat/:id',component:UpdatePlatComponent}
>>>>>>> 7e15bcc13c6ebeb80f23f223e1bf9efc58a34162
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
