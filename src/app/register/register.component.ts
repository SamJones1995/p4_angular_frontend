import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new UntypedFormGroup({
    Username: new UntypedFormControl(''),
    Password: new UntypedFormControl(''),
    fName: new UntypedFormControl(''),
    lName: new UntypedFormControl(''),
    Address: new UntypedFormControl(''),
    Address2: new UntypedFormControl(''),
    City: new UntypedFormControl(''),
    State: new UntypedFormControl(''),
    Zip: new UntypedFormControl(''),
  })

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerForm)
    this.customerService.register(this.registerForm.get("Username")?.value, this.registerForm.get("Password")?.value,this.registerForm.get("fName")?.value,
    this.registerForm.get("lName")?.value,this.registerForm.get("Address")?.value,this.registerForm.get("Address2")?.value, this.registerForm.get("City")?.value, 
    this.registerForm.get("State")?.value, this.registerForm.get("Zip")?.value)
    
     .subscribe(
       (resp) => console.log(resp),
       (err) => console.log(err),
     );
  }

  onClick(): void {
    this.router.navigate(['login']);
  }

}
