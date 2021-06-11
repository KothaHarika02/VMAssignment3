export class Bankclass{
    accnbr:any;
    constructor(accnbr:any){
        this.accnbr=accnbr;
    }
    getBankInfo(){
        console.log(`My Account Number is : ${this.accnbr}`);
    }
}
// let acnb = new Bankclass(12345);
// console.log(acnb.getBankInfo())