function calcular() {
    const peso = document.querySelector('#input-peso').value;
    const altura = document.querySelector('#input-altura').value;
    const result = document.querySelector('.resultado');

    const imc = (peso / (altura * altura)).toFixed(2);

    if(imc < 18.5) {
        result.innerHTML = `${imc} Magreza`;
    } else if(imc > 18.6 && imc < 25) {
        result.innerHTML = `${imc} Normal`;
    } else if(imc > 25 && imc < 30) {
        result.innerHTML = `${imc} Sobrepeso`;
    } else if(imc > 30 && imc < 40) {
        result.innerHTML = `${imc} Obesidade`;
    } else {
        result.innerHTML = `${imc} Obesidade mórbida`;
    }

    document.querySelector('#input-peso').value = '';
    document.querySelector('#input-altura').value = '';
}