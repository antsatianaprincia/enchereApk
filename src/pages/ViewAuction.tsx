import { useState } from 'react';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonSpinner,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewAuction.css';
import { Auction } from '../models/Auction';

function ViewAuction() {
  const [auction, setAuction] = useState<Auction>();
  const [loading, setLoading] = useState(true);
  const params = useParams<{ id: string }>();

  
   

  useIonViewWillEnter(() => {
    setTimeout(() => {
      fetch('https://encheregit-production.up.railway.app/auctions/'+params.id)
      .then(response => response.json())
      .then(data => { console.log(data);setAuction(data);})
      .catch(error => console.log(error));
      setLoading(false);
      },100);
    });
 

  function rencherir(): void {
    console.log("rencherir");
  }

  return (
    <IonPage id="view-auction-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {auction ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {auction.descriptions}
                  <span className="date">
                    <IonNote>{auction.pubDate.toString()}</IonNote>
                  </span>
                </h2>
                <h3>
                  To: <IonNote>Me</IonNote>
                </h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{auction.products.name}</h1>
              <p>
                teste  View Enchere
              </p>
            </div>
            <div><IonButton onClick={()=> rencherir()}>rencherir</IonButton> </div>
          </>
        ) : (
          <IonSpinner/>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewAuction;
