import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts.service';
import { Account } from '../models/account';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.css']
})
export class AccountsViewComponent implements OnInit {
  [x: string]: any;

  allAccounts!: Account[]

  accountTypes = ['Checking', 'Savings']

  accountTypeNumber!: number;

  customerId!: number;



  newAccountForm = new UntypedFormGroup({
    AccountType: new UntypedFormControl(''),
    Balance: new UntypedFormControl(''),
  })

  constructor(private accountService: AccountsService, private router: Router) { }

  ngOnInit(): void {

    let auth = localStorage.getItem('ArbId');
    if (!auth) auth = '';
    this.customerId = parseInt(auth);

    this.accountService.getAllCustomerAccounts(this.customerId).subscribe(
      (resp) => this.allAccounts = resp,
      (error) => console.log(error)
    );
  }

  onSubmit(): void {

    

    if (this.newAccountForm.get("AccountType")?.value == 'Checking') this.accountTypeNumber = 1;

    if (this.newAccountForm.get("AccountType")?.value == 'Savings') this.accountTypeNumber = 2;

    this.accountService.createNewAccount(this.customerId, this.accountTypeNumber, this.newAccountForm.get("Balance")?.value)
    
     .subscribe(
       (resp) => console.log(resp),
       (err) => console.log(err),
     );
     location.reload()
  }

  onClick(): void {
    this.router.navigate(['transaction-view']);
  }
  

}
