console.log('ping')

const resultadoEncriptado = document.getElementById('resultadoEncriptado')
const resultadoDesencriptado = document.getElementById('resultadoDesencriptado')

function encriptar() {
    //Cesar
    let txtDesInput = document.getElementById('txtEncriptar').value
    let textoNuevo = cifradoCesar(txtDesInput)
    //XOR






    resultadoEncriptado.innerHTML = textoNuevo
    
}

function desencriptar() {
    let txtDesInput = document.getElementById('txtDesencriptar').value
    console.log(txtDesInput)
    let textoNuevo = descifradoCesar(txtDesInput)
    resultadoDesencriptado.innerHTML = textoNuevo
}

function cifradoCesar(txt) {
    let letra, textoCifrafo = ''
    let alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
    let posiciones = 8;
    //Rotamos el alfabeto 8 lugares a la derecha
    let cifrado = alfabeto.slice(-posiciones);
    cifrado += alfabeto.slice(0, alfabeto.length - posiciones);
    //Encriptar recorriendo 8 posiciones
    for (let i = 0; i < txt.length; i++) {
        letra = txt[i].toLowerCase();
        if (letra == ' ') {
            letra = ' ';
        }
        else {
            letra = cifrado[alfabeto.indexOf(letra)];
        }
        textoCifrafo += letra;
    }
    return textoCifrafo
}

function descifradoCesar(txt) {
    let letra, respuesta = '';
    let alfabeto = 'abcdefghijklmnñopqrstuvwxyz'
    let clave = 8
    let cifrado = alfabeto.slice(-clave);
    cifrado += alfabeto.slice(0, alfabeto.length - clave)
    for (let i = 0; i < txt.length; i++) {
        letra = txt[i].toLowerCase();
        if (letra == ' ') {
            letra = ' ';
        }
        else {
            letra = alfabeto[cifrado.indexOf(letra)];
        }
        respuesta += letra;
    }
    return respuesta;
}