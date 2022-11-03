import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerService } from './customer.service';
import { environment } from 'src/environments/environment';

describe ('CustomerService', () => {
  let injector: TestBed;
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
    injector = getTestBed();
    service = injector.get(CustomerService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<Customer>', () => {
    const dummyCustomer = {
      customerId: 1,
      username: "Test",
      password: "password",
      firstName: "string",
      lastName: "string",
      address: "string",
      address2: "string",
      city: "string",
      state: "string",
      zip: 11111
    }

    service.getById(1).subscribe(customer => {
      expect(customer.username).toBe("Test");
      expect(customer).toEqual(dummyCustomer);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}/customer/1`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyCustomer);
  });

  it('register should return new user info', () => {
    const dummyNewCustomer = {
      username: "Test",
      password: "password",
      firstName: "string",
      lastName: "string",
      address: "string",
      address2: "string",
      city: "string",
      state: "string",
      zip: 11111
    }

    service.register(dummyNewCustomer.username, dummyNewCustomer.password,dummyNewCustomer.firstName, dummyNewCustomer.lastName,
      dummyNewCustomer.address, dummyNewCustomer.address2, dummyNewCustomer.city, dummyNewCustomer.state, dummyNewCustomer.zip).subscribe(
        newCustomer => {
          expect(newCustomer.username).toBe("Test");
          expect(newCustomer).toEqual(dummyNewCustomer);
        });

    const req = httpMock.expectOne(`${environment.baseUrl}/customer/register`);
    expect(req.request.method).toBe("POST");
    req.flush(dummyNewCustomer);
  })

  it('login should return user info', () => {
    const dummyCustomer = {
      username: "testyboy",
      password: "password"
    }

    service.login(dummyCustomer.username, dummyCustomer.password).subscribe(
      loginCustomer => {
        expect(loginCustomer.username).toBe("testyboy");
      });

      const req = httpMock.expectOne(`${environment.baseUrl}/customer/login`);
      expect(req.request.method).toBe("POST");
      req.flush(dummyCustomer);
  })


})