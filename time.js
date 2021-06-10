function partOfDay(){
    var day=Number(document.getElementById('Hour').value);
    console.log(day);
    if(day>1 && day<4){
        document.write('afternoon')
    }
    else if(day>4 && day<8){
        document.write('evening')
    }
    else if(day>8 && day<12){
        document.write('morning')
    }
    else
    document.write('bigger number')
}