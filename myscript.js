
// ------------ MENU ------------ 

// Evento que se ejecuta cuando la página se carga completamente
document.addEventListener("DOMContentLoaded", function() {

  // Primero ejecuta la funcion "generanumeros"captcha
  generarnumeroscapcha();

  // Agregar el evento de clic al botón de enviar formulario
  document.getElementById("botonform").addEventListener("click", verificarRespuesta);
});

// ------------ FUNCIONES ------------ 

function generarnumeroscapcha() {

  // Generar dos números aleatorios entre 0 y 9
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);

  // Asignar los números generados a los elementos HTML correspondientes
  document.getElementById("capchatnumero1").textContent = num1;
  document.getElementById("capchatnumero2").textContent = num2;
}

function verificarRespuesta(event) {

  // Prevenir el envío del formulario por defecto
  event.preventDefault();

  // Obtener la respuesta ingresada por el usuario
  var respuesta = parseInt(document.getElementById("respuestadelformulario").value);

  // Calcular el resultado de la suma
  var num1 = parseInt(document.getElementById("capchatnumero1").textContent);
  var num2 = parseInt(document.getElementById("capchatnumero2").textContent);
  var resultado = num1 + num2;

  // Obtener los datos de los campos del formulario
  var name = document.getElementById("name").value;
  var emailaddress = document.getElementById("emailaddress").value;
  var phone = document.getElementById("phone").value;
  var companyindustries = document.getElementById("companyindustries").value;
  var menssaje = document.getElementById("menssaje").value;

  // Verificar la respuesta
  if (respuesta === resultado) {

    // Mostrar mensaje de respuesta correcta
    document.getElementById("mensaje").textContent = "¡Respuesta correcta!";
    document.getElementById("mensaje").style.display = "block";

    // Configurar los datos del formulario para enviarlo por POST
    var data = {
      name: name,
      emailaddress: emailaddress,
      phone: phone,
      companyindustries: companyindustries,
      menssaje: menssaje
    };
    
    // Realizar la solicitud POST mediante la API Fetch
    var form = document.getElementById("formulario");
    form.method = "POST";
    form.action = "https://formsubmit.co/3ef383ea9c05b6cf289816b5da6fc455";
    form.target = "_blank"; // Abrir en una nueva pestaña

    // Envío del formulario
    form.submit();
  } 
  
  else {
    
    // Mostrar mensaje de respuesta incorrecta
    document.getElementById("mensaje").textContent = "Respuesta incorrecta. Inténtelo nuevamente.";
    document.getElementById("mensaje").style.display = "block";

    // Generar nuevos números de captcha
    generarnumeroscapcha();
  }

  // Restablecer el campo de respuesta
  document.getElementById("respuestadelformulario").value = "";
}
