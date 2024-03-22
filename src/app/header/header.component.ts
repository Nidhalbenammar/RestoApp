import { Component } from '@angular/core';
import { LoginService } from '../auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
test=true;
constructor(public s:LoginService){}
ngOnInit(): void {
  if (this.s.isLoggedIn()){
    this.test=true;
  }
}
}
