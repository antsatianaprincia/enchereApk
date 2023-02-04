import { IonHeader, IonToolbar, IonTitle } from '@ionic/react'
import React from 'react'
import Menu from './Menu'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
        
        <IonHeader>
        <IonToolbar>
            <IonTitle>My Tini Commerce</IonTitle>
        </IonToolbar>
        </IonHeader>
    </>
    
  )
}

export default Header