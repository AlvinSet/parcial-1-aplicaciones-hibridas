# Hotel Booking System

Un sistema de reservas de hotel construido con React en el frontend y Node.js/Express en el backend, utilizando MongoDB para la base de datos.

## Tecnologías

- **Frontend**: React, NextUI
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB


## Instalación

1. **Clonar el Repositorio**:
    ```bash

    git clone https://github.com/AlvinSet/parcial-1-aplicaciones-hibridas.git


    git clone https://github.com/AlvinSet/parcial-2-aplicaciones-hibridas.git


    ```

2. **Backend**:
    - Instalar dependencias:
      ```bash
      npm install
      ```
    - Crear archivo `.env` en el `backend`:
      ```
      PORT=3000
      MONGO_URI=tu_uri_de_mongo
      JWT_SECRET=tu_secreto_jwt
      CORS_ORIGIN=http://localhost:ejemplo
      ```

3. **Frontend**:
    - Instalar dependencias:
      ```bash
      cd ../aplicaciones-hibridas-parcial-2
      npm install
      ```

## Ejecución

1. **Backend**:
    ```bash

    npm start

    ```

2. **Frontend**:
    ```bash
    cd ../aplicaciones-hibridas-parcial-2
    npm start
    ```

3. Abrir en el navegador: `http://localhost:`

## Rutas API

- **Usuarios**
  - `POST /api/users/register` - Registrar
  - `POST /api/users/login` - Iniciar sesión
  - `GET /api/users/profile` - Obtener perfil (requiere autenticación)

- **Habitaciones**
  - `GET /api/rooms` - Obtener todas
  - `POST /api/rooms` - Crear (requiere autenticación)
  - `PUT /api/rooms/:id` - Actualizar (requiere autenticación)
  - `DELETE /api/rooms/:id` - Eliminar (requiere autenticación)

- **Servicios**
  - `GET /api/services` - Obtener todos
  - `POST /api/services` - Crear (requiere autenticación)
  - `PUT /api/services/:id` - Actualizar (requiere autenticación)
  - `DELETE /api/services/:id` - Eliminar (requiere autenticación)

- **Reservas**
  - `GET /api/bookings` - Obtener todas (requiere autenticación)
  - `POST /api/bookings` - Crear (requiere autenticación)
  - `PUT /api/bookings/:id` - Actualizar (requiere autenticación)
  - `DELETE /api/bookings/:id` - Eliminar (requiere autenticación)

## Autor

Alvin Guamán (https://github.com/AlvinSet)