function getSavingDeposit(custId:any,custName:any,custAcnbr:any){
    console.log(`${custName} of id ${custId} with accountnbr ${custAcnbr} has ${7}% in my savings`);
}
function getReccuringDeposit(custId:any,custName:any,custAcnbr:any){
    console.log(`${custName} of id ${custId} with accountnbr ${custAcnbr} has ${15}% in my reccuring amount`);
}

function getFixedDeposit(custId:any,custName:any,custAcnbr:any){
    console.log(`${custName} of id ${custId} with accountnbr ${custAcnbr} has ${27}% amount in my fixed deposit`);
}

var hdfc=new getSavingDeposit(101,'suresh',162);
var hdfc=new getSavingDeposit(102,'suresh kumar',262);
var hdfc=new getReccuringDeposit(108,'suresh yadav',762);
var hdfc=new getFixedDeposit(106,'suresh kumar yadav',962);
