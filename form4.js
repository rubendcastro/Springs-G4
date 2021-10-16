funciotn validar_nombre(string){
if(campoNombre == null || campoNombre.length == 30 && required minlength = "4" || /^\s+$/.test(campoNombre)){
     alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
     return false;
 //validar character set:

	var campoNombre = document.getElementById('address').value;

    if( /[^a-zA-Z\-\/]/.test( TCode ) ) {
        alert('Input is not alpha');
        return false;
    }

     if( /[^0-9\-\/]/.test( TCode ) ) {
        alert('Input is not numeric');
        return false;
    }


}

funcion validar_contrasenas(strint){

$(document.registration).ready(function() {

  $('input').keyup(function() {
    // set password variable
    var password = $(this).val();
    var p1 = document.getElementById("password1").value;
    var p2 = document.getElementById("password2").value;
    var noValido = / /;


    //validar longitud contraseña
    if ( password.length < 8 ) {
        $('#length').removeClass('valid').addClass('invalid');
    } else {
        $('#length').removeClass('invalid').addClass('valid');
    }
    //validar letra
    if ( password.match(/[A-z]/) ) {
        $('#letter').removeClass('invalid').addClass('valid');
    } else {
        $('#letter').removeClass('valid').addClass('invalid');
    }

    //validar letra mayúscula
    if ( password.match(/[A-Z]/) ) {
        $('#capital').removeClass('invalid').addClass('valid');
    } else {
        $('#capital').removeClass('valid').addClass('invalid');
    }

    //validar numero
    if ( password.match(/\d/) ) {
        $('#number').removeClass('invalid').addClass('valid');
    } else {
        $('#number').removeClass('valid').addClass('invalid');
    }

    if(p1 != "" && p2 != ""){

      //validar confirmación contraseña
      if (p1.length == 0 || p2.length == 0) {
        $('#null').removeClass('valid').addClass('invalid');
      } else {
        $('#null').removeClass('invalid').addClass('valid');
      }


    return true;

      //validar contraseñas cohincidan
      if (p1 != p2) {
        $('#match').removeClass('valid').addClass('invalid');
      } else {
        $('#match').removeClass('invalid').addClass('valid');
      }

      if(noValido.test(p1 || p2)){ // se chequea el regex de que el string no tenga espacio
        $('#blank').removeClass('valid').addClass('invalid');
      } else {
        $('#blank').removeClass('invalid').addClass('valid');
      }
    }

  }).focus(function() {
      $('#pswd_info').show();
  }).blur(function() {
    $('#pswd_info').hide();
  });

});
}

module.exports.validar_nombre = validar_nombre;
module.exports.validar_contasenas = validar_contrasenas;