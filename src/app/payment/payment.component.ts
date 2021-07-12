import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from './payment';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  title: string = "Payments Received";

  allPayments: Payment[] = [];

  myError = '';
  constructor(private paymentService: PaymentService, private router: Router) { 

  }

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe((response) => {
      
      this.allPayments = response;
    },
    (error) => {
       
      console.log(error.error.message);
      this.myError = error.error.message;
    });
   
  }

}
