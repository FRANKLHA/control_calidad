// error js
document.getElementById('calcularBtn1').onclick = function() {
  var numero = document.getElementById('numeroInput1').value;
  var resultado1 = numero * numero;
  document.getElementById('resultado1').textContent = resultado1;
}

// correcto js
document.getElementById('calcularBtn2').addEventListener('click', function() {
  try {
    var numero = parseFloat(document.getElementById('numeroInput2').value);
    if (isNaN(numero)) {
      throw new Error('Por favor, ingrese un número válido');
    }
    var resultado2 = numero * numero;
    document.getElementById('resultado2').textContent = 'El cuadrado es: ' + resultado2;
  } catch (error) {
    document.getElementById('resultado2').textContent = 'Error: ' + error.message;
  }
});