# Clipboard Sharing

## Descripción
Este proyecto es una aplicación que permite compartir portapapeles entre los dispositivos que esten conectados desde el cliente al servidor.
Pudiendo asi compartir entre ellos el portapapeles de todos siendo siempre disponible el ultimo que se haya copiado.
(Solo funciona por ahora con cadenas de texto.)

## Índice
1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Contribución](#contribución)

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/AlfonsoEscobar/Clipboardy.git

2. Instala las dependencias:
   ```bash
   npm install
   
## Uso
  - Primero inicias el servidor:
      ```bash
      npm run start
      
   :warning:
   Debes de compiar la ip de la maquina donde esta el servidor y ponerla en el codigo del cliente
   para que se pueda conectar.
   :warning:
   Debes de estar dentro de la misma WIFI.
   
  - Inicias el cliente:
       ```bash
       npm start:client
  - Inicias el cliente en otra maquina:
       ```bash
       npm start:client

  *Listo ya lo puedes usar.*
  *En un futuro intentare poner que se puda copiar imagenes.*

## Contribución
   ***Hecho con amor ❤️​ por [AlfonsoEscobar](https://github.com/AlfonsoEscobar)***

