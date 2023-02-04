import { User } from "./User";
import { Category } from "./category";

export class Products {
    id: number=0;
    name: string='';
    category: Category;
    user: User;

    constructor(data:any) {
        this.id=data.id;
        this.category=data.category;
        this.name=data.name;
        this.user=new User(data.user);
    }

}