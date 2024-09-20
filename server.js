const WebSocket = require('ws');

// Crear el servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Un cliente se ha conectado.');

    // Escuchar los mensajes de los clientes
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);

        // Enviar el mensaje a todos los clientes conectados (broadcast)
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Un cliente se ha desconectado.');
    });
});

console.log('Servidor WebSocket escuchando en ws://localhost:8080');
