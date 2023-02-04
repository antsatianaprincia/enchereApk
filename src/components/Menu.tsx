import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react'
import React, { useEffect } from 'react'

type Props = {}

const Menu = (props: Props) => {
  const handleLogout = () => {
      var token = sessionStorage.getItem('user_token');
      const headers = new Headers();
      if (token != null) {
        headers.set('user_token', token);
      }
      fetch('https://localhost:8080/users/logout', {
        method: 'GET',
        headers: headers
    })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            if (data.data != null) {
              sessionStorage.removeItem("user_token")
              window.location.replace("/login")
            }
         })
         .catch((err) => {
            console.log(err.message);
         });
    
  };
    return (
        <IonMenu contentId="main-content">
            <IonContent className="ion-padding">
              <IonList>
                <IonItem onClick={handleLogout}>
                  <IonLabel>Logout</IonLabel>
                </IonItem>

                <IonItem href={"/login"}>
                  <IonLabel>Login</IonLabel>
                </IonItem>

              </IonList>
            </IonContent>
        </IonMenu>
      );
}

export default Menu