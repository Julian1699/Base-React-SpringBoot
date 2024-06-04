# Sistema de Gestión de Objetos 
| React | SpringBoot | H2 |

## Aplicación de Gestión de Objetos con React JS, Spring Boot y H2

![Base FullStack - db-docker](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/86f9361b-84a8-4b19-a0a6-70d41884b8d7)

¡Bienvenido al repositorio del proyecto de la Aplicación de Gestión de Objetos! En esta versión, hemos empleado H2 para una mayor escalabilidad y rendimiento. La aplicación utiliza tecnologías modernas como React y Spring Boot.

## Descripción

El objetivo central de esta aplicación es proporcionar una plataforma eficiente y centralizada para la gestión de objetos abstractos. Hemos combinado React JS en el frontend y Spring Boot en el backend para ofrecer una experiencia de usuario dinámica y una base sólida.

## Características Clave

### Frontend React JS
Hemos utilizado React JS para construir una interfaz de usuario altamente interactiva y dinámica. Los componentes de React están organizados jerárquicamente, brindando una experiencia fluida y receptiva a los usuarios.

### Gestión de Estilos con Bootstrap
La apariencia profesional y amigable para el usuario se logra mediante el uso de Bootstrap, que permite aplicar estilos y diseño de manera coherente.

### Comunicación Asincrónica
La biblioteca Axios gestiona las peticiones HTTP asincrónicas entre el frontend y el backend, lo que garantiza respuestas eficientes y en tiempo real.

### Backend Spring Boot con Java
Hemos implementado Spring Boot en el backend para crear un sistema robusto y seguro. Esto nos permite manejar rutas, autenticación, autorización y la lógica empresarial en general.

### Controladores REST
Hemos utilizado controladores REST de Spring para definir y gestionar las diversas rutas y acciones disponibles en la aplicación.

### Persistencia con JPA y Hibernate
La capa de persistencia y gestión de datos se realiza a través de JPA y Hibernate. En esta versión hemos utilizado H2, lo que mejora la escalabilidad y el rendimiento.

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
- **H2**: Sistema de gestión de bases de datos relacional.

## Instalación y Ejecución

### Prerrequisitos
- Node.js y npm instalados en su máquina.
- Java JDK 17 instalado en su máquina.
- Docker instalado y configurado.

### Pasos
1. Clonar el repositorio:
   
```bash
git clone --branch main-db-docker --single-branch https://github.com/Julian1699/Base-React-SpringBoot.git
```

2. Instalar dependencias del frontend:
    ```bash
    cd frontend-react
    ```

    ```bash
    npm install
    ```

3. Ejecutar el frontend:

    ```bash
    npm start
    ```

4. Poner a correr Docker Compose del Backend en Spring Boot
Para instanciar el contenedor con la imagen de la base de datos PostgreSQL y permitir que el API se conecte a ella y el ORM cree las tablas necesarias, sigue estos pasos:

- Navega al directorio del backend de Spring Boot:

```bash
cd backend-springboot/
```
Ejecuta Docker Compose:

```bash
docker-compose up
```
5. Ejecutar el Método main del API
Corre el método main del API para que se creen las tablas necesarias en la base de datos.a).

![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/20b0b2db-471a-4dd9-87b2-de7db95e4a22)
   
6. Acceso a la Base de Datos en Contenedor de Docker
   
Para acceder a la base de datos PostgreSQL en el contenedor Docker, sigue estos pasos:

Abre una terminal que tenga acceso a Docker.

Ejecuta el siguiente comando para acceder al contenedor:
   
```bash
winpty docker exec -it db-postgres bash
```
![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/333c1e49-58a8-4348-8709-7d0bf8901edb)

Una vez dentro del contenedor, conéctate a PostgreSQL:

```bash
psql -U root -d tryapi
```
![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/8a1b3997-30eb-4ebc-a248-84c83c762062)
   
Ahora puedes realizar consultas a las entidades de la base de datos en la terminal:

![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/17eee8fe-7b45-4f22-9c5d-5a22f2ce295f)
 
7. Acceder a la aplicación:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8080`
   - Swagger: `http://localhost:8080/swagger-ui/index.html#/`
