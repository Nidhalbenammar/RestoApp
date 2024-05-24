import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PropositionsService } from '../../../service/propositions.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-proposition',
  templateUrl: './add-proposition.component.html',
  styleUrls: ['./add-proposition.component.css']
})
export class AddPropositionComponent {
  propForm:any;
  propositions:any;
  constructor(private fb:FormBuilder, private ps:PropositionsService, private router:Router){
    this.propForm=this.fb.group({
      id:[],
      dessert:[],
      plat:[],
      supplement:[]

    });
   
  }
  addProposition(){
    this.ps.addProposition(this.propForm.value).subscribe((data)=>{
      console.log('Proposition item added successfully');
      this.showAlert();
      this.router.navigate(['/liste-propositions']);
    });
  }
  async showAlert() {
    const { value: success } = await Swal.fire({
      title: 'Propsition Added successfully!',
      text: '',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500 
    });} 
  
}
