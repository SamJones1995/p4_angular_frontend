import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  subscription!: Subscription;

  customer!: Customer;
  
  ngOnInit(): void {
    this.subscription = this.customerService.getById(1).subscribe(
      (response) => this.customer = response,
      (error) => console.log(error) 
    );

  }

}
