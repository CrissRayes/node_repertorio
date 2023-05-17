# Desafío Mi Repertorio

## Descripción

Esta aplicación permite listar, editar y eliminar items desde un listado de canciones.
Es un desafío de la carrera de Desarrollo Web Full Stack.

### Características

Se desarrolla un servidor con node y express utilizando las rutas necesarias para un CRUD.
El servidor corre en el puerto localhost:3000.
![captura-pantalla](./assets/img/screenshot.png)

### Instalación

```
$ npm install
```

- node v18.16.0
- express ^4.18.2
- nodemon ^2.0.22

### Iniciar el servidor

```
$npm start
```

### Endpoints

- GET /canciones
- GET /canciones/:id
- POST /canciones
- PUT /canciones/:id
- DELETE /canciones/:id
