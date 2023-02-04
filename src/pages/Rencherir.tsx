import { IonButton, IonCheckbox, IonInput, IonItem, IonLabel, IonPage, useIonAlert } from '@ionic/react'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router';
import '../assets/mycss/Form.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
type Props = {}

const Rencherir = (props: Props) => {

    const id = sessionStorage.getItem("token");
        let idUser = null;
        if (id != null) {
            const json = JSON.parse(id);
            idUser = json.id;
        }

    const history = useHistory();
    var montantRef = useRef<HTMLIonInputElement>(null);
    
    const [presentAlert] = useIonAlert();
    
    function authentificate() {
        var montant = montantRef.current?.value;
        var content= {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({montant:montant})
        }
        fetch('https://encheregit-production.up.railway.app/users/login', content).then(response=>
            response.json()
        ).then((data)=>{
            console.log(data);
            if (data == null) {
              presentAlert({
                header: data.error.code,
                message: data.error.message,
                buttons: ['OK'],
              })
            } else {
              getToken(data.valeur);
              history.push('/home');
            }
            
        }).catch((error)=>{presentAlert({
            header: 'Sign in failed',
            message: 'Email or password not valid',
            buttons: ['OK'],
        })})
    }
    function getToken(token_name:string) {
        sessionStorage.getItem(token_name);
    }
    return (
        <><Header />
            
            <form className="ion-padding myform">
                <input type="hidden" value="idUser" />
                <IonLabel className='formtitle'>Rencherir</IonLabel>
                <IonItem className='inputitem'>
                    <IonLabel position="floating">Montant</IonLabel>
                    <IonInput ref={montantRef} />
                </IonItem>
                
                <IonButton className="ion-margin-top inputitem" type="button" expand="block" onClick={authentificate}>
                    Valider
                </IonButton>
        </form>
        <Footer />
        </>
        
    );
};

export default Rencherir