# Aplicacion base en node para implementar microservicios

¡La aplicacion tiene *Una estructura básica para inicia un aplcación*!

Incluye los diferentes comandos para el desarrollo desde cero ahasta producción

Lista de comandos
---------------
1. dev: implementado con nodemon para desarrollo  
2. build: contruye el codigo final para producción
3. start: inicia la aplicacion  en la carpeta build para producción
4. on: levanta la aplicacion en la carpeta src

## Capetas Integradas

### src
¡Contiene todo el código de la aplicación en desarrollo!

### build
¡Contiene todo el código de la aplicación para producción!

### src/routes
¡Contiene el archivo de configuración de rutas instanciadas con express.Router()!

### src/controller
¡Contiene el archivo para la implementacion de los procesos que se llaman desde las rutas!

### src/auth
¡Contiene el archivo  con el objeto verifyToken que permite validar autenticación con jsonwebtoken -ver documentación-!

### src/api
¡Contiene el archivo con cuatro metodos utilizando la api js fetch!

Lista de métodos (se pasa la url y el metodo -GET, POST, PUT, DELETE-)
---------------
1. peticionData: (sin parametros adicionales a la url y el metodo)  
2. peticionDataBody: (json para body como parametro adicional a la url y el metodo)
3. peticionDataHeaders: (parametros en json para headers como parametros adicionales a la url y el metodo)
4. peticionDataBodyHeaders: (parametros en json para headers y body como parametros adicionales a la url y el metodo)

### src/util
¡Contiene el archivo reuzables para la aplicación!

### src/constants
¡Contiene las constantes disponible para la aplicación!


