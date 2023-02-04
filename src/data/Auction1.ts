import { Duration } from "./Duration";
import { Products } from "./Products";

export class Auction1 {
    id: number=0;
    pubDate: Date;
    descriptions: string="";
    price: number=0;
    minPrice: number=0;
    soldPrice: number=0;
    products: Products;
    duration: Duration;
    isClosed: number=0;

    constructor(
        id: number,
        pubDate: Date,
        descriptions: string,
        price: number,
        minPrice: number,
        soldPrice: number,
        products: Products,
        duration: Duration,
        isClosed: number
      ) {
        this.id = id;
        this.pubDate = pubDate;
        this.descriptions = descriptions;
        this.price = price;
        this.minPrice = minPrice;
        this.soldPrice = soldPrice;
        this.products = products;
        this.duration = duration;
        this.isClosed = isClosed;
      }


    
}
export const getAllAuction = () => {
    let auctions: Auction1[] = [];
    fetch('https://encheregit-production.up.railway.app/auctions')
      .then(response => response.json())
      .then(data => {
        data.data.forEach((auctionData: any) => {
          auctions.push(
            new Auction1(
              auctionData.id,
              new Date(auctionData.pubDate),
              auctionData.descriptions,
              auctionData.price,
              auctionData.minPrice,
              auctionData.soldPrice,
              new Products(auctionData.products),
              new Duration(auctionData.duration),
              auctionData.isClosed
            )
          );
        });
      })
      .catch(error => console.error(error));
    return auctions;
  };
  
    
 

