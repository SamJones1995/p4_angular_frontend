import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) { }

  subscription!: Subscription;

  customer!: Customer;

  loginForm = new UntypedFormGroup({
    Username: new UntypedFormControl(''),
    Password: new UntypedFormControl('')
  })
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm)
    this.customerService.login(this.loginForm.get("Username")?.value, this.loginForm.get("Password")?.value)
     .subscribe(
       (resp) => localStorage.setItem('ArbId', resp.customerId),
       (err) => console.log(err),
     );
     this.router.navigate(['accounts-view']);
  }
  onClick(): void {
    this.router.navigate(['register']);
  }

}
