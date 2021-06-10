function addData(){
    var myFirst = Number(document.getElementById('first').value);
    var mySecond = Number(document.getElementById('second').value);
    var addition=myFirst + mySecond;
    //document.write(addition)
    document.getElementById('Res').value = addition

}
function subData(){
    var myFirst = document.getElementById('first').value;
    var mySecond = document.getElementById('second').value;
    var subtraction=myFirst - mySecond;
    //document.write(subtraction)
    document.getElementById('Res').value = subtraction
}

function mulData(){
    var myFirst = document.getElementById('first').value;
    var mySecond = document.getElementById('second').value;
    var multiplication=myFirst * mySecond;
    //document.write(multiplication)
    document.getElementById('Res').value = multiplication
}

function divData(){
    var myFirst = document.getElementById('first').value;
    var mySecond = document.getElementById('second').value;
    var division=myFirst / mySecond;
    //document.write(division)
    document.getElementById('Res').value = division
}

