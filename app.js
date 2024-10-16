// Función para generar un número aleatorio de 3 dígitos sin repeticiones
function generarNumeroAleatorio() {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numeros.sort(() => 0.5 - Math.random()).slice(0, 3);
  }
  
  // Número aleatorio generado por la máquina
  const numeroMaquina = generarNumeroAleatorio();
  
  while (true) {
    let muertos = 0;
    let heridos = 0;
  
    // Obtener la entrada del usuario
    const numeroUsuario = prompt("Ingresa un número de tres dígitos:");
  
    // Validar la entrada del usuario
    if (numeroUsuario.length !== 3) {
      console.log("El número que ingresaste debe tener tres dígitos");
      continue;
    }
  
    // Convertir la entrada del usuario a un array de números
    const digitosUsuario = numeroUsuario.split('').map(Number);
  
    // Comparar los números y contar muertos y heridos
    for (let i = 0; i < 3; i++) {
      if (numeroMaquina[i] === digitosUsuario[i]) {
        muertos++;
      } else if (numeroMaquina.includes(digitosUsuario[i])) {
        heridos++;
      }
    }
  
    // Verificar si el usuario ganó
    if (muertos === 3) {
      console.log("¡Ganaste!");
      break;
    }
  
    console.log(`Tienes ${muertos} muertos y ${heridos} heridos\n`);
  }