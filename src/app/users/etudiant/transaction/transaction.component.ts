  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { Component } from '@angular/core';
  import Swal from 'sweetalert2';
  import { AuthService } from '../../../auth/service/auth.service';

  @Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css']
  })
  export class TransactionComponent {
    solde:number=0;
    private baseUrl = "http://localhost:9092/";
    userId = localStorage.getItem('userId');
      headers=this.auth.createAuthorizationHeader();
    constructor(private auth:AuthService,private http:HttpClient){

    }
    
    transfer(  codeSecuriteSource: number,numeroCarteDestination: string,montant: number,id: number) {
      const transfererRequest = { codeSecuriteSource,numeroCarteDestination,montant,id };
      return this.http.post<any>(this.baseUrl + 'transferersolde', transfererRequest, {headers:this.headers }).subscribe(
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
    transferer() {
      Swal.fire({
        title: 'Transfer',
        html:

        '<input  type="password" id="code" class="swal2-input" placeholder="Enter The security code" >'+
        '<input id="num" class="swal2-input" placeholder="Enter The card Number"  >'+
        '<input id="solde" class="swal2-input" placeholder="Enter The Amount"  >',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          const securityCode: HTMLInputElement | null = document.getElementById('code') as HTMLInputElement;
          const card: HTMLInputElement | null = document.getElementById('num') as HTMLInputElement;
          const montant: HTMLInputElement | null = document.getElementById('solde') as HTMLInputElement;
          if (securityCode) {
            const Card = card.value;
            const securityCode1 = securityCode.value;
            const montant1 = montant.value;
            console.log('Security Code:', securityCode1);
            console.log('Card Number:', Card);
            console.log('montant:', montant1);
            return this.transfer( Number(securityCode1),Card,Number(montant1),Number(this.userId));
          } else {
            return null;
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      });}
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
  
      


    
  }