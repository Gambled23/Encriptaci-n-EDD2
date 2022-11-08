console.log('ping')

const resultadoEncriptado = document.getElementById('resultadoEncriptado')
const resultadoDesencriptado = document.getElementById('resultadoDesencriptado')

function encriptar() {
    let txtDesInput = document.getElementById('txtEncriptar').value //Obtener value de input
    //Cifrar
    let textoNuevo = cifradoCesar(txtDesInput)
    textoNuevo = cifradoXor(textoNuevo)
    resultadoEncriptado.innerHTML = textoNuevo //Actualizar HTML flex
}

function desencriptar() {
    let txtDesInput = document.getElementById('txtDesencriptar').value//Obtener valor
    //Descifrar
    let textoNuevo = cifradoXor(txtDesInput)
    textoNuevo = descifradoCesar(textoNuevo)
    resultadoDesencriptado.innerHTML = textoNuevo //Aactualizar HTML
}

function cifradoCesar(txt) {
    let letra, textoCifrafo = ''
    let alfabeto = 'abcdefghijklmnñopqrstuvwxyz'
    let posiciones = 8
    //Rotamos el alfabeto 8 lugares a la derecha
    let cifrado = alfabeto.slice(-posiciones)
    cifrado += alfabeto.slice(0, alfabeto.length - posiciones);
    //Encriptar recorriendo 8 posiciones
    for (let i = 0; i < txt.length; i++) {
        letra = txt[i].toLowerCase()
        if (letra == ' ') {
            letra = ' '
        }
        else {
            letra = cifrado[alfabeto.indexOf(letra)];
        }
        textoCifrafo += letra
    }
    return textoCifrafo
}

function descifradoCesar(txt) {
    let letra, respuesta = ''
    let alfabeto = 'abcdefghijklmnñopqrstuvwxyz'
    let clave = 8
    let cifrado = alfabeto.slice(-clave)
    cifrado += alfabeto.slice(0, alfabeto.length - clave)
    for (let i = 0; i < txt.length; i++) {
        letra = txt[i].toLowerCase()
        if (letra == ' ') {
            letra = ' '
        }
        else {
            letra = alfabeto[cifrado.indexOf(letra)]
        }
        respuesta += letra
    }
    return respuesta
}

function cifradoXor(txt)
{
    txt = txt.split("")
    let xorKey = 'P'; //Clave XOR
    let longitud = txt.length
 
    //operacion xor con cada caracter
    for (let i = 0; i < longitud; i++)
    {
        txt[i] = (String.fromCharCode((txt[i].charCodeAt(0)) ^ xorKey.charCodeAt(0)))
    }
    return txt.join("")
}