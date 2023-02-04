import { User } from "./User";
import { Category } from "./Category";

export interface Products {
    id: number;
    name: string;
    category: Category;
    user: User;


}