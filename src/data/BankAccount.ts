import { User } from "./User";

export class BankAccount {
    id: number;
    money: number;
    user: User;
    constructor(id: number, money: number, user: User) {
        this.id = id;
        this.money = money;
        this.user = user;
    }
}



