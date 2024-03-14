import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
import { AffichageMenuComponent } from './affichage-menu/affichage-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'header',component: HeaderComponent},
  {path:'menu',component: MenuComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'gestion-menu',component:GestionMenuComponent},
  {path:'affichage-menu',component:AffichageMenuComponent},
  {path:'add-menu',component:AddMenuComponent},
  {path:'login', component:LoginComponent},
  {path:'update-plat/:id',component:UpdatePlatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
