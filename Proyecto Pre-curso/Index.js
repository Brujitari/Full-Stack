const inputTarea = document.getElementById('inputTarea')


// to get the user value-> inputTarea.value


/* Como hacer un botón :D
 const encabezado = document.getElementById('encabezado')

window.onload = function () {
    const button = document.createElement('button')
    button.innerText = '+'
    encabezado.appendChild(button)
}
 */


inputTarea.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      console.log(inputTarea.value)
    }
  });