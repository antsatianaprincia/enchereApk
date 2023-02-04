import { BankAccount } from "./BankAccount";

export interface BankRequest {
   
    id: number;

    bankAccount: BankAccount;

    requestedAmount: number;

    requestDate: Date;

    isConfirmed: boolean;

}