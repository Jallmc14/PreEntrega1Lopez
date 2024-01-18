// Backend de los usuarios

let savedPIN = "6413";
let ingresar = false;

for (let i = 1; i <= 3; i++) {
    let userPIN = prompt("Ingresa tu contraseña.");
    if (userPIN == savedPIN) {
        alert("Bienvenido a Medicina Dental");
        ingresar = true;
        break
    }else{
        alert("Erro de contraseña, intentalo de nuevo")
    }

}

if (ingresar) {
    let fecha = 15012024;
    let opcion = prompt("\n1-Confirmar turnos \n2-Modificar turno \n3-Cancelar turnos \nPresiona 4 para Salir");
    while (opcion != "4" && opcion != "4") {
        switch (opcion){
            case "1": confirmacionTurnos()
                break
            case "2": alert("Su turno fue modificado")
                break
            case "3": alert("Su turno fue cancelado")
                break
        }
        opcion = prompt("n1-Confirmar turnos \n2-Modificar turno \n3-Cancelar turnos \nPresiona 4 para Salir");
    }


    function confirmacionTurnos(){
        let turno = parseInt(prompt("Por favor confirmar fecha del turno"))
        if (turno == fecha){
            turno = fecha
            alert("Su turno fue confirmado con éxito")
        }else{
            alert("Su turno no existe")
        }
    }
}