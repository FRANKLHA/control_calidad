// js incorrecto
document.getElementById('miBoton').onclick = function() {
  alert('Clic en el botón');
}





// js correcto
function handleClick() {
  alert('Clic en el botón');
}

document.getElementById('miBotonCorrecto').addEventListener('click', handleClick);