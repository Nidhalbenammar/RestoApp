import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { GestionMenuComponent } from './menu/gestion-menu/gestion-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AffichageMenuComponent } from './menu/affichage-menu/affichage-menu.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { UpdatePlatComponent } from './menu/update-plat/update-plat.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
=======
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './users/admin/admin.component';
import { EtudiantComponent } from './users/etudiant/etudiant.component';
import { ChefComponent } from './users/chef/chef.component';
>>>>>>> 7e15bcc13c6ebeb80f23f223e1bf9efc58a34162
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    FooterComponent,
    GestionMenuComponent,
    AffichageMenuComponent,
    AddMenuComponent,
    UpdatePlatComponent,
<<<<<<< HEAD
    MenuDetailsComponent
=======
    LoginComponent,
    AdminComponent,
    EtudiantComponent,
    ChefComponent
>>>>>>> 7e15bcc13c6ebeb80f23f223e1bf9efc58a34162
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
