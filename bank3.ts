class Bank{
    custId:number;
    custName:string;
    custAcnumber:number;
    constructor(Id:number,Name:string,acnumber:number){
        this.custId=Id;
        this.custName=Name;
        this.custAcnumber=acnumber;
    }
    getSavingDeposit(){
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${7}% savings in his bank`;
    }
    getReccuringDeposit(){
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${10}% of his amount in his bank`;
    }
    getFixedDeposit(){
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${15}% of amount in fixed deposit in his bank`;
    }
}
let cust1 = new Bank(101,'suresh',201101);
let cust2 = new Bank(102,'ramesh',202809);
let cust3 = new Bank(103,'raju',203467);
console.log(cust1.custId,cust1.custName,cust1.custAcnumber);
console.log(cust2.custId,cust2.custName,cust2.custAcnumber);
console.log(cust3.custId,cust3.custName,cust3.custAcnumber);
console.log(cust1.getSavingDeposit());
console.log(cust3.getFixedDeposit());


