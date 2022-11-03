import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {

  transactionForm = new UntypedFormGroup({
    AccountId1: new UntypedFormControl(''),
    AccountId2: new UntypedFormControl(''),
    Amount: new UntypedFormControl(''),
  })

  withdrawForm = new UntypedFormGroup({
    AccountId: new UntypedFormControl(''),
    Amount: new UntypedFormControl(''),
  })

  depositForm = new UntypedFormGroup({
    AccountId: new UntypedFormControl(''),
    Amount: new UntypedFormControl(''),
  })

  constructor(private accountService: AccountsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.accountService.transferFunds(this.transactionForm.get("AccountId1")?.value, this.transactionForm.get("AccountId2")?.value, this.transactionForm.get("Amount")?.value)
    
     .subscribe(
       (resp) => console.log(resp),
       (err) => console.log(err),
     );
     
  }

  withdraw(): void {
    this.accountService.withdraw(this.withdrawForm.get("AccountId")?.value, this.withdrawForm.get("Amount")?.value)
    .subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err),
    );
  }

  deposit(): void {
    this.accountService.deposit(this.depositForm.get("AccountId")?.value, this.depositForm.get("Amount")?.value)
    .subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err),
    );
  }

  return(): void {
    this.router.navigate(['accounts-view']);
  }
}
