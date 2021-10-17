//Test Tiene menos de 4 caracteres
function validar_nombre(string) {
	
	let campoNombre;
	campoNombre="pru";

if (campoNombre.length<4){
 alert("El nombre tiene menos de 4 caracteres");  
  return false;  
  }  



    }

function validar_contrasenas(string) {
	//let password;
      //  password="";
	//let password1;
	//password1="";

//if (password1!=password){
// alert("Las contraseñas coinciden");  

//  } else {  
 //   alert("Password created successfully"); 
//  return false;   
//  }  
  }  
       
 

            

    module.exports.validar_nombre = validar_nombre;
    module.exports.validar_contasenas = validar_contrasenas;
