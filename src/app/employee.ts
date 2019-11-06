export class Employee {
    id: number;
    name: string;
    location: string;
    email: string;
    mobile: string;
    constructor(id:number,
        name:string,
        location:string,
        email:string,
        mobile:string){
            this.id = id;
            this.name = name;
            this.location = location;
            this.email = email;
            this.mobile = mobile;
        }
}
