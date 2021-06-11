import {Address} from './address'
import {Bankclass} from './bankclass'
class Customer{
    custName:string;
    constructor(custName:string){
        this.custName=custName;
    }
    getCustomerInfo(){
        console.log(`Iam ${this.custName}`);
    }
}
let cust = new Customer('suresh')
console.log(cust.getCustomerInfo());

let acnb = new Bankclass(12345);
console.log(acnb.getBankInfo());

let addrs = new Address('Hyderabad');
console.log(addrs.getAddressInfo());