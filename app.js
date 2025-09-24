// Array para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;
    
    // Validar que no esté vacío
    if (nombre == '') {
        alert('Por favor ingresa un nombre');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el input
    input.value = '';
    
    // Mostrar la lista actualizada
    mostrarAmigos();
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar que hay amigos en la lista
    if (amigos.length == 0) {
        alert('No hay amigos para sortear');
        return;
    }
    
    // Generar número aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    let amigoSorteado = amigos[indice];
    
    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<li>El amigo secreto es: ' + amigoSorteado + '</li>';
}