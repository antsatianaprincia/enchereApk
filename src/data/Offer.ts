import { User } from "./User";
import { Auction } from "./auction";

export class Offer {
    id: number;
    idAuction: Auction;
    amount: number;
    user: User;
    dateOffer: Date;

    constructor(id: number, idAuction: Auction, amount: number, user: User, dateOffer: Date) {
        this.id = id;
        this.idAuction = idAuction;
        this.amount = amount;
        this.user = user;
        this.dateOffer = dateOffer;
    }
}