import { IonFooter, IonToolbar, IonTitle, IonApp } from '@ionic/react'
import React from 'react'
import '../assets/mycss/Footer.css'
type Props = {}

const Footer = (props: Props) => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle className='footertext'> First ionic react app</IonTitle>
      </IonToolbar>
    </IonFooter>
  )
}

export default Footer