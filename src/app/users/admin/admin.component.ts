import { Component } from '@angular/core';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {constructor(private readonly swalTargets: SwalPortalTargets) {}

  async showAlert() {
  const { value: success } = await Swal.fire({
    title: 'Good job!',
    text: 'You clicked the button!',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500 
  });
}
}
