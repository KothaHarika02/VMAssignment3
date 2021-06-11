export class Address{
    city:string;
    constructor(city:string){
        this.city=city;
    }
    getAddressInfo(){
        console.log(`I stay in ${this.city}`);
    }
}
// let addrs = new Address('Hyderabad');
// console.log(addrs.getAddressInfo());