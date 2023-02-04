import { Duration } from "./Duration";
import { Products } from "./Products";

export interface Auction{
    id: number;
    pubDate: Date;
    descriptions: string;
    price: number;
    minPrice: number;
    soldPrice: number;
    products: Products;
    duration: Duration;
    isClosed: number;

}