# Sistema de Gestión de Objetos
| React | Spring Boot | PostgreSQL | Docker |

## Aplicación de Gestión de Objetos con React, Spring Boot y PostgreSQL (Dockerizado)

         ![Final APP Dockerized](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/ba48866c-c6c7-4728-8820-1496e7917693)

¡Bienvenido al repositorio del proyecto de la Aplicación de Gestión de Objetos! En esta versión, hemos empleado PostgreSQL Dockerizado para una mayor escalabilidad y rendimiento. La aplicación utiliza tecnologías modernas como React y Spring Boot.

## Descripción

El objetivo central de esta aplicación es proporcionar una plataforma eficiente y centralizada para la gestión de objetos abstractos. Hemos combinado React en el frontend y Spring Boot en el backend para ofrecer una experiencia de usuario dinámica y una base sólida.

## Características Clave

### Frontend React JS
Hemos utilizado React para construir una interfaz de usuario altamente interactiva y dinámica. Los componentes de React están organizados jerárquicamente, brindando una experiencia fluida y receptiva a los usuarios.

### Gestión de Estilos con Bootstrap
La apariencia profesional y amigable para el usuario se logra mediante el uso de Bootstrap, que permite aplicar estilos y diseño de manera coherente.

### Comunicación Asincrónica
La biblioteca Axios gestiona las peticiones HTTP asincrónicas entre el frontend y el backend, lo que garantiza respuestas eficientes y en tiempo real.

### Backend Spring Boot con Java
Hemos implementado Spring Boot en el backend para crear un sistema robusto y seguro. Esto nos permite manejar rutas, autenticación, autorización y la lógica empresarial en general.

### Controladores REST
Hemos utilizado controladores REST de Spring para definir y gestionar las diversas rutas y acciones disponibles en la aplicación.

### Persistencia con JPA y Hibernate
La capa de persistencia y gestión de datos se realiza a través de JPA y Hibernate. En esta versión, hemos utilizado PostgreSQL Dockerizado, lo que mejora la escalabilidad y el rendimiento.

## Tecnologías Empleadas

### Frontend
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Bootstrap**: Framework CSS para el diseño responsivo.
- **Font Awesome**: Biblioteca de iconos vectoriales.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.

### Backend
- **Spring Boot**: Framework para construir aplicaciones Java.
- **Spring Data JPA**: Para interactuar con la base de datos.
- **Swagger**: Documentación interactiva de la API.
- **Postgres**: Sistema de gestión de bases de datos relacional.

## Instalación y Ejecución

### Prerrequisitos

- Docker instalado y configurado.

### Pasos
1. Clonar el repositorio:
   
```bash
git clone --branch dockerized-app --single-branch https://github.com/Julian1699/Base-React-SpringBoot.git
```

2. Ejecutar Docker Compose
Ejecuta el siguiente comando en el directorio donde se encuentre el archivo docker-compose.yml:

```bash
docker compose up
```
Después de un tiempo, se crearán tres contenedores: uno con la aplicación en React, otro con el API en Spring Boot y otro con la imagen de la base de datos en PostgreSQL, de la siguiente manera:

![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/dc5b2e3c-664a-4aa2-8ecd-d6f723aaeb18)

3. Acceso a la Base de Datos en Contenedor de Docker
   
Para acceder a la base de datos PostgreSQL en el contenedor Docker, sigue estos pasos:

- Abre una terminal que tenga acceso a Docker.

- Ejecuta el siguiente comando para acceder al contenedor:
   
```bash
winpty docker exec -it db-postgres bash
```
![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/333c1e49-58a8-4348-8709-7d0bf8901edb)

- Una vez dentro del contenedor, conéctate a PostgreSQL:

```bash
psql -U root -d tryapi
```
![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/8a1b3997-30eb-4ebc-a248-84c83c762062)
   
- Ahora puedes realizar consultas a las entidades de la base de datos en la terminal:

![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/17eee8fe-7b45-4f22-9c5d-5a22f2ce295f)
 
7. Acceder a la aplicación:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8080`
   - Swagger: `http://localhost:8080/swagger-ui/index.html#/`
