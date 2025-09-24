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