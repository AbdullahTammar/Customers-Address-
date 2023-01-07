import { Address } from "./address";


export class Customers {

    id:number;
    name:string;
    addresses:Address[];

    constructor(id: number,name: string){
        this.id = id;
        this.name = name;
        this.addresses = [];
    }

}