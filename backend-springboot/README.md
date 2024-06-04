# Backend del Sistema de Gestión de Objetos 

| Spring Boot | Postgres-Docker |

## Aplicación de Gestión de Objetos con Spring Boot y Postgres-Docker

¡Bienvenido al repositorio del backend de la Aplicación de Gestión de Objetos! En esta aplicación, utilizamos Spring Boot para el desarrollo del backend, proporcionando una API robusta y segura.

## Descripción

El objetivo central de este backend es proporcionar una API eficiente y centralizada para la gestión de objetos abstractos. Spring Boot se utiliza en el backend para construir un sistema escalable y seguro.

## Características Clave

### Backend Spring Boot

- **Controladores REST**: Utilizamos controladores REST para definir y gestionar las rutas y acciones de la API.
- **Persistencia con JPA y Hibernate**: La gestión de datos se realiza a través de JPA y Hibernate, asegurando una interacción eficiente con la base de datos.
- **Documentación con Swagger**: La API está documentada con Swagger, proporcionando una interfaz interactiva para probar los endpoints.
- **Base de Datos Postgres-Docker**: Utilizamos Postgres-Docker para la gestión de bases de datos relacional.


## Poner a correr Docker Compose del Backend en Spring Boot

Para instanciar el contenedor con la imagen de la base de datos PostgreSQL y permitir que el API se conecte a ella y el ORM cree las tablas necesarias, sigue estos pasos:

- Navega al directorio del backend de Spring Boot:

```bash
cd backend-springboot/
```
- Ejecuta Docker Compose:

```bash
docker-compose up
```
### Ejecutar el Método main del API

Corre el método main del API para que se creen las tablas necesarias en la base de datos.a).

![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/20b0b2db-471a-4dd9-87b2-de7db95e4a22)
   
### Acceso a la Base de Datos en Contenedor de Docker
   
Para acceder a la base de datos PostgreSQL en el contenedor Docker, sigue estos pasos:

- Abre una terminal que tenga acceso a Docker.

Ejecuta el siguiente comando para acceder al contenedor:
   
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

## Funcionalidades CRUD

Dirigirse a la ruta especifica del backend y ejecutarlo:

```bash
    
    cd ../backend-springboot
    
```

Accer a la siguiente ruta una vez se haya puesto a correr la aplicación: 

- http://localhost:8080/swagger-ui/index.html


### Crear Objeto

Permite a los usuarios agregar nuevos objetos a la base de datos mediante una solicitud HTTP POST.

### Leer Objetos

Permite a los usuarios ver una lista de todos los objetos almacenados. Los datos se obtienen mediante una solicitud HTTP GET.

### Leer Objeto por ID

Permite a los usuarios obtener un objeto específico por su ID mediante una solicitud HTTP GET.

### Actualizar Objeto

Permite a los usuarios editar los detalles de un objeto existente. Los datos modificados se envían mediante una solicitud HTTP PUT.

### Eliminar Objeto

Permite a los usuarios eliminar un objeto de la base de datos mediante una solicitud HTTP DELETE.

### Buscar Objetos por Filtros

Permite a los usuarios buscar objetos en la base de datos utilizando varios filtros (nombre, descripción, precio, fecha de creación). La búsqueda se realiza mediante una solicitud HTTP GET con parámetros de consulta.

### Tecnologías Empleadas

### Backend

- Spring Boot: Framework para construir aplicaciones Java.

- Spring Data JPA: Para interactuar con la base de datos.

- Swagger: Documentación interactiva de la API.

- Postgres-Docker: Sistema de gestión de bases de datos relacional.
