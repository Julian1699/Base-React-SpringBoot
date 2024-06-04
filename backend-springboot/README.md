# Backend del Sistema de Gestión de Objetos 

| Spring Boot | MySQL |

## Aplicación de Gestión de Objetos con Spring Boot y MySQL

¡Bienvenido al repositorio del backend de la Aplicación de Gestión de Objetos! En esta aplicación, utilizamos Spring Boot para el desarrollo del backend, proporcionando una API robusta y segura.

## Descripción

El objetivo central de este backend es proporcionar una API eficiente y centralizada para la gestión de objetos abstractos. Spring Boot se utiliza en el backend para construir un sistema escalable y seguro.

## Características Clave

### Backend Spring Boot

- **Controladores REST**: Utilizamos controladores REST para definir y gestionar las rutas y acciones de la API.
- **Persistencia con JPA y Hibernate**: La gestión de datos se realiza a través de JPA y Hibernate, asegurando una interacción eficiente con la base de datos.
- **Documentación con Swagger**: La API está documentada con Swagger, proporcionando una interfaz interactiva para probar los endpoints.
- **Base de Datos MySQL**: Utilizamos MySQL para la gestión de bases de datos relacional.


## Acceso a la Base de Datos H2

Para acceder a la base de datos H2, sigue estos pasos:

1. Inicia la aplicación Spring Boot.
   
2. Abre tu navegador web y dirígete a la siguiente URL:

- http://localhost:8080/h2-console
  
3. De no encontrarse configurados, reescribe los campos en la pantalla de inicio de sesión de la consola H2 de la siguiente manera:

```bash
Driver Class: org.h2.Driver
JDBC URL: jdbc:h2:mem:testdb
User Name: root
Password: (deja este campo vacío)
```

- Haz clic en "Connect".

![image](https://github.com/Julian1699/Base-React-SpringBoot/assets/114323630/ea382d8f-2093-4497-bb90-be47b0f81b09)

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

- MySQL: Sistema de gestión de bases de datos relacional.
