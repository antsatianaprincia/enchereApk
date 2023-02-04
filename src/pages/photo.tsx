import { IonActionSheet, IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption, IonTextarea, useIonRouter } from "@ionic/react";
import axios from "axios"
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import { Products } from "../data/Products";


const Photo: React.FC = () => {
    const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
    
    

    return (
        <IonContent>
            
            
            
            /* Pour faire l'upload de fichier */
            <IonGrid>
                <IonRow>
                    {photos.map((photo, index) => (
                    <IonCol size="6" key={index}>
                        <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                    </IonCol>
                    ))}
                </IonRow>
            </IonGrid>

            <IonFab vertical="bottom" horizontal="center" slot="fixed">
                <IonFabButton onClick={() => takePhoto()}>
                    <IonIcon icon={camera}></IonIcon>
                </IonFabButton>
            </IonFab>

            <IonActionSheet
                isOpen={!!photoToDelete}
                buttons={[{
                    text: 'Delete',
                    role: 'destructive',
                    icon: trash,
                    handler: () => {
                    if (photoToDelete) {
                        deletePhoto(photoToDelete);
                        setPhotoToDelete(undefined);
                    }
                    }
                }, {
                    text: 'Cancel',
                    icon: close,
                    role: 'cancel'
                }]}
                onDidDismiss={() => setPhotoToDelete(undefined)}
            />

        </IonContent>
    );
};

export default Photo;