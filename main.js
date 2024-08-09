const form = document.getElementById('numeros');

form.addEventListener ('submit') , function(e){
    e.preventDefault();
}

function verificar() {
    let numA = document.getElementById("numA");
    let num1 = Number(numA.value);
    let numB = document.getElementById("numB");
    let num2 = Number(numB.value);
    let resp = document.getElementById("res");

    if (num1 > num2) {
        resp.innerHTML = "O valor é INVÁLIDO";
    } else {
        resp.innerHTML = "O valor é VÁLIDO";
    }
}