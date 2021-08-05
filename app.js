
function validar() {
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if (usuario == "JUANCITO" && Contraseña == "123456") {
       //alert("Usuario y Contraseña validos");
        text = "Datos Validos";

        window.open("https://app.powerbi.com/view?r=eyJrIjoiODBiOGY3Y2MtZTg1OC00NTc4LTkyNGYtMmVmMWFlZTUyMzgzIiwidCI6IjMwOTE4NjllLTFiNWMtNDlhNy1iZWQwLTA1ODJiMjBlYzg0NSIsImMiOjJ9")
    } else {
        //alert("Verifique sus credenciales");
        text = "Error en los Datos";
       
    }
    document.getElementById("Error").innerHTML = text;
}

function click() {
    
    if (event.button == 2) {
        alert('Boton derecho deshabilitado');
    }
}

// $("#errorSpan").html("Rellena todos los campos");  Jquery