/**
 * Rules:
 * La letra "e" es convertida para "enter"`
 * La letra "i" es convertida para "imes"`
 * La letra "a" es convertida para "ai"`
 * La letra "o" es convertida para "ober"`
 * La letra "u" es convertida para "ufat"`
 */


/*================================================= */
/*==========CAPTURA DE ELEMENTOS EN DOM============ */
/*================================================= */

let $text = document.querySelector("#textAreaInput");
let $textResult = document.querySelector("#textAreaResponse");
let $btnToEncrypt = document.querySelector("#btnEncript");
let $btnToEncoder = document.querySelector("#btnEncoder");
let $btnToCopy = document.querySelector("#btnCopy");

let $img = document.querySelector('.img');
let $info1 = document.querySelector(".info1");
let $info2 = document.querySelector(".info2");


var textoEncriptadoConEspacios = null;
var validar;
var estadoDeEncriptacion = false;
var copy = false;


/*================================================= */
/*===========APARTADO DE EVENTLISTENER============= */
/*================================================= */

$btnToEncrypt.addEventListener("click", toEncrypt);
$btnToCopy.addEventListener("click", toCopy);
$btnToEncoder.addEventListener("click", toEncoder);


function toEncrypt() {
    encriptador($text.value);
}

function toCopy() {
    $text.value = textoEncriptadoConEspacios;
    $textResult.textContent = "";
    copy = true;
    $text.focus();
}

function toEncoder() {
    desencriptador(textoEncriptadoConEspacios);
}



// /*================================================= */
// /*=============APARTADO DE VALIDACION=============== */
// /*================================================= */

function validacion(texto) {
    for (let i = 0; i < texto.length; i++) {
        var Unicode = texto.codePointAt(i)
        if (Unicode == 32 || Unicode >= 97 && Unicode <= 122 || Unicode == 63) {
            validar = true;
        } else {
            validar = false;
            break;
        }
    }
}


function encriptador(texto) {
    validacion(texto);
    if (validar) {
        estadoDeEncriptacion = true;
        let mensajeEncryptadoSinEspacios = encriptacion(texto);
        mostrar(mensajeEncryptadoSinEspacios)
        cambiosEnPantalla();
        $btnToCopy.focus();

    } else {
        let $warnign = document.querySelector('.warning p');
        $warnign.style.color = "red";
        $text.focus();
    }
}


function encriptacion(textoValidado) {
    let mensajeEncriptado = '';
    let arrLetras = textoValidado.split("");
    for (let i = 0; i < arrLetras.length; i++) {
        let char = arrLetras[i];
        switch (char) {
            case "a":
                char = "ai";
                break;
            case "e":
                char = "enter";
                break;
            case "i":
                char = "imes";
                break;
            case "o":
                char = "ober";
                break;
            case "u":
                char = "ufat";
                break;
        }

        arrLetras[i] = char;
    }

    mensajeEncriptado = arrLetras.join('');
    textoEncriptadoConEspacios = mensajeEncriptado;
    mensajeEncriptado.replace(" ", "")
    return mensajeEncriptado;
};


function cambiosEnPantalla() {

    if (estadoDeEncriptacion) {
        let response = document.querySelector("#textAreaResponse");
        let $warnign = document.querySelector('.warning p');
        $warnign.style.color = "#4779d1";
        $img.style.display = "none";
        $textResult.style.display = "block"
        $info2.textContent = `El mensaje contiene ${response.value.length} letras`;
        $info1.textContent = "Mensaje recibido con exito!";
        limpiar()

    } else {
        $info1.textContent = "Mensaje Desencriptado!";
        limpiar()
        autodestruccion();
    }

}



function mostrar(mensajes) {
    $textResult.textContent = mensajes;
}



function desencriptador(textoEncriptado) {
    let mensaje = null;
    $text.focus();
    if (textoEncriptado != null && copy == true) {
        estadoDeEncriptacion = false;
        mensaje = textoEncriptado.replaceAll('ai', 'a')
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
        
        mostrar(mensaje)
        cambiosEnPantalla()
        $textResult.focus();
        $btnToCopy.focus();
    }else{
    }

};


function limpiar() {
    setTimeout(() => {
        $text.value = "";
    }, 500);
}


function autodestruccion() {
    var contador = 10;
    
    setInterval(() => {
        $info2.textContent = `SE AUTODESTRUIRA EN ${contador} SEGUNDOS`;
        contador--;
    }, 1000);
    
    
    setTimeout(() => {
        location.reload()
    }, 10000);
}