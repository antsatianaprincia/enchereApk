import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea, useIonRouter } from "@ionic/react";
import axios from "axios"
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const listProducts = () => {
    const data = axios.get("https://encheregit-production.up.railway.app/products");
    return data;
}

const listDurations = () => {
    const data = axios.get("https://encheregit-production.up.railway.app/durations");
    return data;
}

const AjoutEnchere: React.FC = () => {
    const history = useHistory();
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [duration, setDuration] = useState([]);
    const [product, setProduct] = useState([]);
    const [prod,setProd] = useState();
    const router = useIonRouter();

    const ajoutEnchere = (props: any) => {
        const id = sessionStorage.getItem("token");
        let idUser = null;
        if (id != null) {
            const json = JSON.parse(id);
            idUser = json.id;
        }
        axios.post("https://encheregit-production.up.railway.app/auctions", {
            description: props.description,
            price: props.price,
            minPrice: props.minPrice,
            idProduct: props.product,
            duration: props.duration,
            isClosed: props.isClosed
        }).then((data) => {
            router.push("/ListEnchere", "forward", "push");
        });
    }

    listDurations().then(data => setDuration(data.data)).catch(() => console.log("Error"));
    listProducts().then(data => setProduct(data.data)).catch(() => console.log("Error"));

    const add = {
        description: description,
        price: price,
        minPrice: minPrice,
        duration: duration,
        product: product
    }

    return (
        <IonContent>
            <IonItem>
                <IonLabel position='floating'>Desciption de l'objet</IonLabel>
                <IonTextarea
                    placeholder="Decrivez votre produit"
                    onIonChange={e => setDescription(e.detail.value!)}
                />
            </IonItem>
            <IonItem>
                <IonLabel position='floating'>Entrez le prix minimum de vente</IonLabel>
                <IonInput
                    placeholder="Ajouter votre prix de depart"
                    type="number"
                    onIonChange={e => setPrice(e.detail.value!)}
                />
            </IonItem>
            <IonItem>
                <IonLabel position='floating'>Entrez le prix minimum de vente</IonLabel>
                <IonInput
                    placeholder="Ajoutez un prix minimum de vente"
                    type="number"
                    onIonChange={e => setMinPrice(e.detail.value!)}
                />
            </IonItem>
            <IonItem>
                <IonLabel position='floating'>Categorie</IonLabel>
                <IonSelect interface='popover' onIonChange={(e) => setProd(e.detail.value)}>
                    {
                        product.map((item) => {
                            return (
                                <IonSelectOption key={item["id"]} value={item["id"]}>{item['name']}</IonSelectOption>
                            );
                        })
                    }
                </IonSelect>

            </IonItem>
            <IonItem>
                <IonLabel position='floating'>Duree</IonLabel>
                <IonSelect interface='popover' onIonChange={(e) => setDuration(e.detail.value)}>
                    {
                        duration.map((item) => {
                            return (
                                <IonSelectOption key={item["id"]} value={item["id"]}>{item['duration']}</IonSelectOption>
                            );
                        })
                    }
                </IonSelect>
            </IonItem>

            {/* <IonItem>
                <IonGrid>
                    <IonRow>
                        {photos.map((photo, index) => (
                            <IonCol size="6" key={index}>
                                <IonImg src={photo.webviewPath} />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>

                <IonButton onClick={submitForm}>Ajouter une image</IonButton>
            </IonItem> */}

            <IonButton onClick={() => ajoutEnchere(add)}>Ajouter</IonButton>
        </IonContent>
    );
};

export default AjoutEnchere;