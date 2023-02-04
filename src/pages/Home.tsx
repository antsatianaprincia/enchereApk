import { useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

import AuctionListItem from '../components/AuctionListItem';
import { Auction } from '../models/Auction';


const Home: React.FC = () => {

  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [loading, setLoading] = useState(true);

  useIonViewWillEnter(() => {
    setTimeout(() => {
      fetch('https://encheregit-production.up.railway.app/auctions')
      .then(response => response.json())
      .then(data => {setAuctions(data.data);})
      .catch(error => console.log(error));
      setLoading(false);
      },200);
    });
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 100);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>
       
                      {loading ? (<IonSpinner />) : 
                      (
                           <IonList>
                            {auctions.map((auction :Auction) => (<AuctionListItem key={auction.id} auction={auction} />))}
                          </IonList>
                        )
                      }

        
      </IonContent>
    </IonPage>
  );
};

export default Home;


