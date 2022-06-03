let Jugador_1 = 1;
let Jugador_2 = 2;
var Jugador = 1;

var Botones = Array.from(document.getElementsByTagName("button"));

for(var i = 0; i<Botones.length; i++){
    Botones[i].addEventListener("click",prueba)
}

function prueba(event){
    var boton_pulsado = event.target;
    if(Jugador == 1){
        boton_pulsado.innerHTML = "X";
        boton_pulsado.value = "X";
        Jugador = 2;
        Verificar_Estado();
    }else{
        boton_pulsado.innerHTML = "O";
        boton_pulsado.value = "O";
        Jugador = 1;
        Verificar_Estado();
    }
}


let Div_Nombre_Ganador = document.getElementById("Nombre_Ganador"); 
function Verificar_Estado(){
    //Victorias por filas
    if(Botones[0].value != "" && Botones[0].value == Botones[1].value && Botones[1].value == Botones[2].value){
        Limpiar(Botones[0].value);
    }
    else if(Botones[3].value != "" && Botones[3].value == Botones[4].value && Botones[4].value == Botones[5].value){
        if(Botones[0].value == "X"){
            alert("Gano el jugador 1 por fila 1");     
        }else{
            alert("Gano el jugador 2 por fila 1");     
        }
    }
    else if(Botones[6].value != "" && Botones[6].value == Botones[7].value && Botones[7].value == Botones[8].value){
        if(Botones[0].value == "X"){
            alert("Gano el jugador 1 por fila 2");     
        }else{
            alert("Gano el jugador 2 por fila 2");     
        }
    }

    //Victorias por columnas
    else if(Botones[0].value != "" && Botones[0].value == Botones[3].value && Botones[3].value == Botones[6].value){
        if(Botones[0].value == "X"){
            alert("Gano el jugador 1 por columna 0");     
        }else{
            alert("Gano el jugador 2 por columna 0");     
        }
    }
    else if(Botones[1].value != "" && Botones[1].value == Botones[4].value && Botones[4].value == Botones[7].value){
        if(Botones[0].value == "X"){
            alert("Gano el jugador 1 por columna 1");     
        }else{
            alert("Gano el jugador 2 por columna 1");     
        }
    }
    else if(Botones[2].value != "" && Botones[2].value == Botones[5].value && Botones[5].value == Botones[8].value){
        if(Botones[0].value == "X"){
            alert("Gano el jugador 1 por columna 2");     
        }else{
            alert("Gano el jugador 2 por columna 2");     
        }
    }

    //Victorias en diagonal
    else if(Botones[0].value != "" && Botones[0].value == Botones[4].value && Botones[4].value == Botones[8].value){
        if(Botones[0].value == "X"){
            alert("Gano el jugador 1 por columna 2");     
        }else{
            alert("Gano el jugador 2 por columna 2");     
        }
    }
    else if(Botones[2].value != "" && Botones[2].value == Botones[4].value && Botones[4].value == Botones[6].value){
        if(Botones[0].value == "X"){
            alert("Gano el jugador 1 por columna 2");     
        }else{
            alert("Gano el jugador 2 por columna 2");     
        }
    }
}



function Limpiar(Ganador){
    if(Ganador == "X"){
        Div_Nombre_Ganador.innerHTML = "Gana el Jugador 1";
        Botones[0].classList.add("Triki");
        Botones[1].classList.add("Triki");
        Botones[2].classList.add("Triki");
    }else{
        Div_Nombre_Ganador.innerHTML = "Gana el Jugador 1";
        Botones[0].classList.add("Triki");
        Botones[1].classList.add("Triki");
        Botones[2].classList.add("Triki");
    }
    /*
    for(var i = 0; i<Botones.length; i++){
        Botones[i].innerHTML = "";
    }
    */
}







/*
1. Se obtienen todos los elementos button del documento y se convierten en Array.
2. Se recorre el Array y se agrega que este pendiente del evento click para colocar la marca en el boton clickeado. (No entiendo como es que funciona la mierda del Event y por que event.tarjet pasa los datos suficientes)


function prueba(event){
    var boton_pulsado = event.target;
    boton_pulsado.innerHTML = "<img src='https://media.istockphoto.com/photos/painted-x-mark-picture-id158002966?k=20&m=158002966&s=612x612&w=0&h=MyJNXobTNVhqFQP8oSL3Y95xDOtrxCB4FwsHnE_xRF0='  alt='' width='100%' height='100%' ></img>";
}
*/