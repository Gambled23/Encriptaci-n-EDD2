console.log('ping')

const textoTraducido = document.getElementById('textoTraducido')
const aux = document.getElementById('xd')

function encriptar() {
    //Cesar
    let txtDesInput = document.getElementById('txtEncriptar').value
    let textoNuevo = cifradoCesar(txtDesInput)
    //XOR
    





    textoTraducido.innerHTML = textoNuevo
    
}

function desencriptar() {
    let txtDesInput = document.getElementById('txtEncriptar').value
    textoDesencriptado = descifradoCesar(txtDesInput)
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
    let clave = 0
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