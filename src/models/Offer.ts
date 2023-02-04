import { User } from "./User";
import { Auction } from "./Auction";

export interface Offer {
    id: number;
    idAuction: Auction;
    amount: number;
    user: User;
    dateOffer: Date;

}