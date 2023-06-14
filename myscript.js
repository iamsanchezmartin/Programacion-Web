
function generarNumerosCapcha() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    document.getElementById("capchatnumero1").textContent = num1;
    document.getElementById("capchatnumero2").textContent = num2;
  }
  
  function verificarRespuesta(event) {
 
    var respuesta = parseInt(document.getElementById("respuestadelformulario").value);
    var num1 = parseInt(document.getElementById("capchatnumero1").textContent);
    var num2 = parseInt(document.getElementById("capchatnumero2").textContent);
    var resultado = num1 + num2;
  
    if (respuesta == resultado) {
      document.getElementById("mensaje").textContent = "¡Respuesta correcta!";
      document.getElementById("mensaje").style.display = "block";
      form = document.getElementById("formulario");
      form.method = "POST";
      form.action = "https://formsubmit.co/3ef383ea9c05b6cf289816b5da6fc455"; 
      form.submit(); 
      console.log("true")

    } else {
        event.preventDefault();
      document.getElementById("mensaje").textContent = "Respuesta incorrecta. Inténtelo nuevamente.";
      document.getElementById("mensaje").style.display = "block";
      console.log("false")
    /* */
    }
  
    document.getElementById("respuestadelformulario").value = "";
    generarNumerosCapcha();
  }
  
/*   document.addEventListener("DOMContentLoaded", function() {
    generarNumerosCapcha();
     document.getElementById("botondesendmenssaje").addEventListener("click", verificarRespuesta);
  });

 */

  document.getElementsByClassName("botondesenmessaje").addEventListener("click",verificarRespuesta)