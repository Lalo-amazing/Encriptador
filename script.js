function encriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const resultadoTextoH3 = document.getElementById('resultado-texto-h3');
    const resultadoTextoP = document.getElementById('resultado-texto-p');
    const resultadoImg = document.getElementById('resultado-img');
    const resultadoTexto = document.getElementById('resultado-texto');
    const btnCopy = document.querySelector('.btnCopy');

    const textoEncriptado = encriptar(inputText);

    resultadoTextoH3.textContent = 'Texto Encriptado';
    resultadoTextoP.textContent = textoEncriptado;

    // Mostrar el resultado y ocultar la imagen
    resultadoImg.style.display = 'none';
    resultadoTexto.style.display = 'flex'; 
    btnCopy.style.display = 'block'; 
}

function desencriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const resultadoTextoH3 = document.getElementById('resultado-texto-h3');
    const resultadoTextoP = document.getElementById('resultado-texto-p');
    const resultadoImg = document.getElementById('resultado-img');
    const resultadoTexto = document.getElementById('resultado-texto');
    const btnCopy = document.querySelector('.btnCopy');

    const textoDesencriptado = desencriptar(inputText);

    resultadoTextoH3.textContent = 'Texto Desencriptado';
    resultadoTextoP.textContent = textoDesencriptado;


    resultadoImg.style.display = 'none';
    resultadoTexto.style.display = 'flex'; 
    btnCopy.style.display = 'block'; 
}

function copiarTexto() {
    const textoParaCopiar = document.getElementById('resultado-texto-p').textContent;
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        mostrarToast('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

function encriptar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function mostrarToast(mensaje) {
    const toast = document.getElementById('toast');
    toast.textContent = mensaje;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
