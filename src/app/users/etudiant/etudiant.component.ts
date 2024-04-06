
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent { 
  solde:number=0;
  private baseUrl = "http://localhost:9092/";
   userId = localStorage.getItem('userId');
    headers=this.auth.createAuthorizationHeader();
  constructor(private auth:AuthService,private http:HttpClient){

  }
  paye(etudiantId: number, numeroCarte: string, codeSecurite: number) {
    const paymentData = { etudiantId, numeroCarte, codeSecurite };
    return this.http.post<any>(this.baseUrl + 'api/paiements', paymentData, {headers:this.headers }).subscribe(
      response => {
        console.log('sucess:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Error: ', error);
        if(typeof error.error !== 'string'){
          Swal.fire({
            title: 'sucess',
            text: '',
            icon: 'success',
            showConfirmButton: true,
 
          });
        }
        else{
        Swal.fire({
          title: error.error,
          text: '',
          icon: 'error',
          showConfirmButton: false,
    timer: 15000
        });}
      }
    );
  }
  payment() {
    Swal.fire({
      title: 'Enter The Card Number',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Enter The Card Number"  >' +
      '<input  type="password" id="swal-input2" class="swal2-input" placeholder="Enter The security code" >',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const cardNumber: HTMLInputElement | null = document.getElementById('swal-input1') as HTMLInputElement;
        const securityCode: HTMLInputElement | null = document.getElementById('swal-input2') as HTMLInputElement;
        if (cardNumber && securityCode) {
          const cardNumber1 = cardNumber.value;
          const securityCode1 = securityCode.value;
          console.log('Card Number:', cardNumber1);
          console.log('Security Code:', securityCode1);
          return this.paye(Number(this.userId), cardNumber1, Number(securityCode1));
        } else {
          return null;
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }
  rech() {
    Swal.fire({
      title: 'Enter The Amount',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (solde) => {
        return this.recharge(solde);
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }
  recharge(solde: number) {
    
    const requestData = {
      id:this.userId,
      montant: solde,
      
    };
    
    return this.http.post<any>(this.baseUrl + "rechargerCarte", requestData,{ headers :this.headers!}).subscribe(
      
      response => {
        console.log('success:', requestData.montant);
      },
      error => {
        console.error('Error :', error);
      }
    );
  }


  checkBalance() {
    return this.http.get<any>(this.baseUrl + this.userId + "/monsolde", { headers: this.headers }).subscribe(
      response => {
        console.log('Solde:', response);
        this.solde=response;
        this.showBalance();
      },
      error => {
        console.error('Error :', error);
      }
    );
  }
  async showBalance() {
    Swal.fire({ 
      title:'Your Balance is: '+ this.solde.toString(),
      text: '',
      icon: 'info',
      showConfirmButton: false,
      timer: 1500
    });
  }}