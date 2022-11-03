import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandler, Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  authUrl: string = `${environment.baseUrl}/customer`;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const payload = {username: username, password:password};
    return this.http.post<any>(`${this.authUrl}/login`, payload, {headers: environment.headers});
  }

  register(username: string, password: string, firstName: string, lastName: string, address: string, address2: string, city: string, state: string, zip: Number): Observable<any> {
    const payload = {username: username, password: password, firstName: firstName, lastName: lastName,  address: address, address2: address2, city: city, state: state, zip: zip};
    console.log(payload)
    return this.http.post<any>(`${this.authUrl}/register`, payload).pipe(
      catchError(error => {
        if (error.status == 500)  {
        throwError("Email already in use")
        }
        console.log(error)
        
        return throwError(error);
      })

     
    );
  }

  getById(customerId: number) {
    return this.http.get<Customer>(`${this.authUrl}/` + customerId, {headers: environment.headers});
  }

}