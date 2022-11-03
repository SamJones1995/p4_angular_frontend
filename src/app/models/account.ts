export class Account {
  accountId: Number
  accountType: { accountTypeName: string}
  balance: Number
  approved: boolean

  constructor (
  accountId: Number,
  accountType: {
    accountTypeName: string,
  },  
  balance: Number,
  approved: boolean,
  ) {
    this.accountId = accountId
    this.accountType = accountType
    this.balance = balance
    this.approved = approved
  }
}