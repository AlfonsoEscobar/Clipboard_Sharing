import WebSocket from 'ws';
import clipboardy from 'clipboardy';

// Conectarse al servidor WebSocket
const ws = new WebSocket('ws://localhost:8080');

// Mantener una copia del último contenido del portapapeles para detectar cambios
let ultimoPortapapeles = clipboardy.readSync();

// Escuchar mensajes del servidor
ws.on('message', (message) => {
     // Verificar si el mensaje es un Buffer y convertirlo a string si es necesario
     let texto;
     if (Buffer.isBuffer(message)) {
         texto = message.toString();
     } else if (typeof message === 'string') {
         texto = message;
     } else {
         console.error(`Tipo de mensaje inesperado: ${typeof message}`);
         return;
     }
 
     console.log(`Nuevo contenido recibido: ${texto}`);
 
     // Actualizar el portapapeles local con el contenido recibido
     try {
         clipboardy.writeSync(texto);
     } catch (error) {
         console.error('Error al escribir en el portapapeles:', error);
     }
});

// Cada 2 segundos, verificamos si el contenido del portapapeles ha cambiado
setInterval(() => {
    const nuevoPortapapeles = clipboardy.readSync();
    
    // Si el contenido ha cambiado, enviamos la actualización al servidor
    if (nuevoPortapapeles !== ultimoPortapapeles) {
        ultimoPortapapeles = nuevoPortapapeles;
        ws.send(nuevoPortapapeles);
        console.log(`Contenido del portapapeles enviado: ${nuevoPortapapeles}`);
    }
}, 2000);
