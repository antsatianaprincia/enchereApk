export interface Auction{
    id:number;
    nom:String;
    category: CategoryModel;
    datedebut:Date;
    datefin:Date;
    commission:number;
    status:number;
}
type CategoryModel={
    id:number;
    nom:String;

};
const auctions: Auction[] = [
    {
        nom: 'Enchere1',
        category:{
                  id:1,
                  nom:'alpha'
                  },
        datefin: new Date() ,
        datedebut: new Date(),
        commission:1,
        id: 1,
        status:0
      },
      {
        nom: 'Enchere2',
        category:{
                  id:1,
                  nom:'alpha'
                  },
        datefin: new Date(),
        datedebut: new Date(),
        commission:1,
        id: 2,
        status:0
      },
    
      {
        nom: 'Enchere4',
        category:{
                  id:1,
                  nom:'alpha'
                  },
        datefin: new Date(),
        datedebut: new Date(),
        commission:1,
        id: 3,
        status:0
      },
      {
        nom: 'Enchere4',
        category:{
                  id:1,
                  nom:'alpha'
                  },
        datefin: new Date(),
        datedebut: new Date(),
        commission:1,
        id: 4,
        status:0
      },
      {
        nom: 'Enchere5',
        category:{
                  id:1,
                  nom:'alpha'
                  },
        datefin: new Date(),
        datedebut: new Date(),
        commission:1,
        id: 5,
        status:0
      }

];

export const getAuctions = () => auctions;

export const getAuction = (id: number) => auctions.find(m => m.id === id);
export const getDateToString=(date:Date) => date.toString(); 