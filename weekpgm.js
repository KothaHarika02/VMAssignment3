function weekProgram(){
    var day=Number(document.getElementById('Week').value);
    console.log(day);
    //var text;
    switch(day){
        case 1:document.write('Monday');
        break;
        case 2:document.write('Tuesday');
        break;
        case 3:document.write('Wednesday');
        break;
        case 4:document.write('Thursday');
        break;
        case 5:document.write('Friday');
        break;
        case 6:document.write('Saturday');
        break;
        default:document.write('Sunday');
        break;

    }
}