import { IonButton, IonCheckbox, IonInput, IonItem, IonLabel, IonPage, useIonAlert } from '@ionic/react'
import React, { useRef } from 'react'
import { useHistory } from 'react-router';
import '../assets/mycss/Form.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
type Props = {}

const Form = (props: Props) => {
    const history = useHistory();
    var emailRef = useRef<HTMLIonInputElement>(null);
    var passwordRef = useRef<HTMLIonInputElement>(null);
    const [presentAlert] = useIonAlert();
    
    function authentificate() {
        var email = emailRef.current?.value;
        var password = passwordRef.current?.value;
        var content= {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:email,password:password})
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
              saveToken(data.valeur,'user_token');
              history.push('/home');
            }
            
        }).catch((error)=>{presentAlert({
            header: 'Sign in failed',
            message: 'Email or password not valid',
            buttons: ['OK'],
        })})
    }
    function saveToken(token:string, token_name:string) {
        sessionStorage.setItem(token_name, token);
    }
    return (
        <><Header />
            
            <form className="ion-padding myform">
                <IonLabel className='formtitle'>Login Form</IonLabel>
                <IonItem className='inputitem'>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput ref={emailRef} />
                </IonItem>
                <IonItem className='inputitem'>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput ref={passwordRef} type="password" />
                </IonItem>
                <IonButton className="ion-margin-top inputitem" type="button" expand="block" onClick={authentificate}>
                    Login
                </IonButton>
        </form>
        <h2>Email: jane@gmail.com</h2>
        <h2>Password: jane</h2>
        <Footer />
        </>
        
    );
};

export default Form