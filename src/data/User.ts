
    export class User {
        id: number=0;
        name: string='';
        email: string='';
        password: string='';
    
        constructor(data:any) {
            this.id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.password = data.password;
        }
    }