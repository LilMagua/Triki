let Jugador_1 = 1;
let Jugador_2 = 2;
var Jugador = 1;

var Botones = Array.from(document.getElementsByTagName("button"));

for(var i = 0; i<Botones.length; i++){
    Botones[i].addEventListener("click",Turno)
}

function Turno(event){
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
    var Boton0 = Botones[0];
    var Boton1 = Botones[1];
    var Boton2 = Botones[2];
    var Boton3 = Botones[3];
    var Boton4 = Botones[4];
    var Boton5 = Botones[5];
    var Boton6 = Botones[6];
    var Boton7 = Botones[7];
    var Boton8 = Botones[8];

    //Victorias por filas
    if(Boton0.value != "" && Boton0.value == Boton1.value && Boton1.value == Boton2.value){
        Marcar(Boton0.value, Boton0, Boton1, Boton2);
    }
    else if(Botones[3].value != "" && Botones[3].value == Botones[4].value && Botones[4].value == Botones[5].value){
        Marcar(Boton0.value, Boton3, Boton4, Boton5);
    }
    else if(Botones[6].value != "" && Botones[6].value == Botones[7].value && Botones[7].value == Botones[8].value){
        Marcar(Boton0.value, Boton6, Boton7, Boton8);
    }

    //Victorias por columnas
    else if(Botones[0].value != "" && Botones[0].value == Botones[3].value && Botones[3].value == Botones[6].value){
        Marcar(Boton0.value, Boton0, Boton3, Boton6);
    }
    else if(Botones[1].value != "" && Botones[1].value == Botones[4].value && Botones[4].value == Botones[7].value){
        Marcar(Boton0.value, Boton1, Boton4, Boton7);
    }
    else if(Botones[2].value != "" && Botones[2].value == Botones[5].value && Botones[5].value == Botones[8].value){
        Marcar(Boton0.value, Boton2, Boton5, Boton8);
    }

    //Victorias en diagonal
    else if(Botones[0].value != "" && Botones[0].value == Botones[4].value && Botones[4].value == Botones[8].value){
        Marcar(Boton0.value, Boton0, Boton4, Boton8);
    }
    else if(Botones[2].value != "" && Botones[2].value == Botones[4].value && Botones[4].value == Botones[6].value){
        Marcar(Boton0.value, Boton2, Boton4, Boton6);
    }
}



function Marcar(Ganador,Primer_B,Segundo_B,Tercer_B){
    if(Ganador == "X"){
        Div_Nombre_Ganador.innerHTML = "Gana el Jugador 1";
        Primer_B.classList.add("Triki");
        Segundo_B.classList.add("Triki");
        Tercer_B.classList.add("Triki");
    }else{
        Div_Nombre_Ganador.innerHTML = "Gana el Jugador 2";
        Primer_B.classList.add("Triki");
        Segundo_B.classList.add("Triki");
        Tercer_B.classList.add("Triki");    
    }

   setTimeout(Limpiar, 5000);
}

function Limpiar(){
    for(var i = 0; i<Botones.length; i++){
        Botones[i].innerHTML = "";
        Botones[i].classList.remove("Triki");
        Botones[i].value = "";
    }
}




















/*
1. Se obtienen todos los elementos button del documento y se convierten en Array.
2. Se recorre el Array y se agrega que este pendiente del evento click para colocar la marca en el boton clickeado. (No entiendo como es que funciona la mierda del Event y por que event.tarjet pasa los datos suficientes)


function prueba(event){
    var boton_pulsado = event.target;
    boton_pulsado.innerHTML = "<img src='https://media.istockphoto.com/photos/painted-x-mark-picture-id158002966?k=20&m=158002966&s=612x612&w=0&h=MyJNXobTNVhqFQP8oSL3Y95xDOtrxCB4FwsHnE_xRF0='  alt='' width='100%' height='100%' ></img>";
}
*/