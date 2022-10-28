export class Customer {
  username: string
  password: string
  firstName: string
  lastName: string
  address: string
  address2: string
  city: string
  state: string
  zip: Number

  constructor (
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    address2: string,
    city: string,
    state: string,
    zip: Number,
  ) {
    this.username = username
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
    this.address = address
    this.address2 = address2
    this.city = city
    this.state = state
    this.zip = zip
  }
  
}