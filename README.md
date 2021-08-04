# Aplicación base en node JS para implementar microservicios

¡La aplicación tiene *Una estructura básica para iniciar un app de microservicios *!

Incluye los diferentes comandos para el desarrollo desde cero hasta producción, traspiliación con babel -*configuración para desarrollo Emacs2019 y Emac2015 para producción*-

Lista de comandos
---------------
1. dev: implementado con nodemon para desarrollo  
2. build: contruye el codigo final para producción
3. start: inicia la aplicacion  en la carpeta build para producción
4. on: levanta la aplicacion en la carpeta src

## Carpetas Integradas

### src
¡Contiene todo el código de la aplicación en desarrollo!

### build
¡Contiene todo el código de la aplicación para producción!

### src/routes
¡Contiene el archivo de configuración de rutas instanciadas con express.Router()!

### src/controller
¡Contiene el archivo para la implementación de los procesos que se llaman desde las rutas!

### src/auth
¡Contiene el archivo  con el objeto verifyToken que permite validar autenticación con jsonwebtoken -ver documentación-!

### src/api
¡Contiene el archivo con cuatro métodos utilizando la api js fetch!

Lista de métodos (se pasa la url y el método -GET, POST, PUT, DELETE-)
---------------
1. peticionData: (sin parámetros adicionales a la url y el metodo)  
2. peticionDataBody: (json para body como parámetro adicional a la url y el método)
3. peticionDataHeaders: (parámetros en json para headers como parámetros adicionales a la url y el metodo)
4. peticionDataBodyHeaders: (parámetros en json para headers y body como parámetros adicionales a la url y el metodo)

### src/util
¡Contiene el archivo reutilizables para la aplicación!

### src/constants
¡Contiene las constantes que se creen, disponibles para la aplicación!


