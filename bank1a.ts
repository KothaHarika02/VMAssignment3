// class Bank1a{
//     custId:any=[101,200,300]
//     custName:any=['suresh','ramesh','raju']
//     custAcnumber:any=[200293,378293,36282923]
//     // custId=[101,102,103];
//     // custName=['suresh','ramesh','raju'];
//     // custAcnumber=[2011002,200302,220120];
//     getSavingDeposit(custId:any[],custName:any[],custAcnumber:any[])
//     {
//         return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${7}% savings in his bank`;
//     }
//      getReccuringDeposit(){
//         return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${10}% savings in his bank`;
//     }
//      getFixedDeposit(){
//         return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${20}% savings in his bank`;
//     }
// }
//     console.log(2);
//     //let cust=new Bank1();
//     console.log(getSavingDeposit(custId[1],[1],[1]));

// function getSavingDeposit(arg0: number[], arg1: number[], arg2: number[]): any {
//     throw new Error("Function not implemented.");
// }
class Hp{
    custId:any=1000
    custName:any='raju'
    custAcnumber:any=36282923
    // custId=[101,102,103];
    // custName=['suresh','ramesh','raju'];
    // custAcnumber=[2011002,200302,220120];
    getSavingDeposit()
    {
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${7}% savings in his bank`;
    }
     getReccuringDeposit(){
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${10}% savings in his bank`;
    }
     getFixedDeposit(){
        return `${this.custName} with customer id ${this.custId} with account number ${this.custAcnumber} has ${20}% savings in his bank`;
    }
}
    // console.log(2);
    let cust=new Hp();
    console.log(cust.getSavingDeposit());

// function getSavingDeposit(arg0: number[], arg1: number[], arg2: number[]): any {
//     throw new Error("Function not implemented.");
// }