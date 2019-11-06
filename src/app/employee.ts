export class Employee {
    id: number;
    name: string;
    location: string;
    email: string;
    mobile: string;
    constructor(name:string,
        location:string,
        email:string,
        mobile:string){
            this.name = name;
            this.location = location;
            this.email = email;
            this.mobile = mobile;
        }
}
