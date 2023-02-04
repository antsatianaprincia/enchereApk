import {
    IonItem,
    IonLabel,
    IonNote
    } from '@ionic/react';
  import {getDateToString } from '../data/auction';
  import './AuctionListItem.css';
import { Auction1 } from '../data/Auction1';
  
  interface AuctionListItemProps {
    auction: Auction1;
  }
  
  const AuctionListItem: React.FC<AuctionListItemProps> = ({ auction }) => {
    return (
      <IonItem routerLink={`/auction/${auction.id}`} detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            {auction.descriptions}
            <span className="date">
              <IonNote>{getDateToString(auction.pubDate)}</IonNote>
            </span>
          </h2>
          <h3>{auction.products.name}</h3>
          <p>
          {auction.minPrice}
           </p>
        </IonLabel>
      </IonItem>
    );
  };
  
  export default AuctionListItem;