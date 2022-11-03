import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  

  authUrl: string = `${environment.baseUrl}/account`;

  constructor(private http: HttpClient) { }

  getAllCustomerAccounts(customerId: number) {
    return this.http.get<Account[]>(`${this.authUrl}/` + customerId, {headers: environment.headers});
  }

  createNewAccount(customerId: number, accountType: number, balance: number) {

    let aType

    if (accountType == 1) {
      aType = { accountTypeId: accountType, accountTypeName: "checking"}
    }

    if (accountType == 2) {
      aType = { accountTypeId: accountType, accountTypeName: "savings"}
    }

    const payload = { accountType: aType, balance: balance, approved: false}
    console.log(payload)

    return this.http.post<any>(`${this.authUrl}/` + customerId, payload).pipe(
      catchError(error => {
        if (error.status == 500)  {
        throwError("Error")
        }
        console.log(error)
        
        return throwError(error);
      })

     
    );

  }

  transferFunds(accountId1: string, accountId2: string, amount: string) {
    const payload = {accountId1: accountId1, accountId2: accountId2, amount: amount}

    return this.http.put<any>(`${this.authUrl}/transfer`, payload).pipe(
      catchError(error => {
        if (error.status == 500)  {
        throwError("Error")
        }
        console.log(error)
        
        return throwError(error);
      })

     
    );
  }

  withdraw(accountId: string, amount: string) {
    const payload = {accountId: accountId, amount: amount}

    return this.http.put<any>(`${this.authUrl}/withdraw`, payload).pipe(
      catchError(error => {
        if (error.status == 500)  {
        throwError("Error")
        }
        console.log(error)
        
        return throwError(error);
      })

     
    );
  }

  deposit(accountId: string, amount: string) {
    const payload = {accountId: accountId, amount: amount}

    return this.http.put<any>(`${this.authUrl}/deposit`, payload).pipe(
      catchError(error => {
        if (error.status == 500)  {
        throwError("Error")
        }
        console.log(error)
        
        return throwError(error);
      })

     
    );
  }
}
