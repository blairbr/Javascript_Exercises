class BankAccount {
  constructor(balance, interestRate) {
    this.balance = balance;
    this.interestRate = interestRate;
  }

  addInterest() {
    this.balance = this.balance + (this.interestRate * this.balance);
  }
}

class BankAccountWithFee extends BankAccount {
  constructor(balance, interestRate, fee) {
    super(balance, interestRate);
    this.fee = fee;
  }

  applyFee() {
    this.balance = this.balance - this.fee;
  }
}

const myAccountWithFee = new BankAccountWithFee(200, 0.02, 1);
myAccountWithFee.addInterest();
console.log(`After running addInterest(), my current balance is ${myAccountWithFee.balance}`);
myAccountWithFee.applyFee();
console.log(`After running applyFee(), my current balance is ${myAccountWithFee.balance}`);

