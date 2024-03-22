import { Component } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
test=true;
constructor(private auth:AuthService){}
role=this.auth.getUserRole();
}
