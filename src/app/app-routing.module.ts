import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuRoutingModule } from './menu/menu-routing.module';
import { UserRoutingModule } from './users/user-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  {path:'header',component: HeaderComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),UserRoutingModule,MenuRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }