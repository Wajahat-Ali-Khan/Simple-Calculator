

function getNumber(num){
    var number = document.getElementById('result');
    number.value += num;
}

function clearResult(){
    var clear = document.getElementById('result')
    clear.value =""
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}