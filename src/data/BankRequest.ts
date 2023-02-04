import { BankAccount } from "./BankAccount";

export class BankRequest {
   
    id: number;

    bankAccount: BankAccount;

    requestedAmount: number;

    requestDate: Date;

    isConfirmed: boolean;

    constructor(id: number,bankAccount: BankAccount, requestedAmount: number, requestDate: Date, isConfirmed: boolean) {
        this.id=id;
        this.bankAccount = bankAccount;
        this.requestedAmount = requestedAmount;
        this.requestDate = requestDate;
        this.isConfirmed = isConfirmed;
    }
   /**
    * get bankAccount
    */
   public getBankAccount() {
            return this.bankAccount;
   }
}