# Frontend del Sistema de Gestión de Objetos 

| React |

## Aplicación de Gestión de Objetos con React JS.

¡Bienvenido al repositorio del frontend de la Aplicación de Gestión de Objetos! En esta aplicación, utilizamos React para el desarrollo del frontend, proporcionando una experiencia de usuario dinámica y amigable.

## Descripción

El objetivo central de este frontend es proporcionar una interfaz de usuario eficiente y centralizada para la gestión de objetos abstractos. React JS se utiliza en el frontend para construir una interfaz interactiva y receptiva.

## Características Clave

### Frontend React JS
- **Componentes Dinámicos**: Utilizamos componentes de React para crear una interfaz de usuario dinámica y modular.
- **Bootstrap para Estilos**: Se emplea Bootstrap para asegurar un diseño consistente y responsivo.
- **Iconos con Font Awesome**: Implementación de iconos vectoriales mediante Font Awesome.
- **Comunicación Asincrónica**: Axios se utiliza para manejar las solicitudes HTTP asincrónicas hacia el backend.

## Funcionalidades CRUD

### Crear (AgregarObjeto.js)
Permite a los usuarios agregar nuevos objetos a la base de datos mediante un formulario. Los datos se envían al backend utilizando una solicitud HTTP POST.

```javascript
const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/api/v1/objeto";
    await axios.post(urlBase, objeto);
    navegacion('/objetos');
};
```

## Leer (ListadoObjetos.js)
Permite a los usuarios ver una lista de todos los objetos almacenados. Los datos se obtienen del backend mediante una solicitud HTTP GET.

```javascript
const cargarObjetos = async () => {
    try {
        const resultado = await axios.get(urlBase);
        setObjetos(resultado.data);
    } catch (error) {
        console.error("Error al cargar objetos", error);
    }
};
```

## Actualizar (EditarObjeto.js)
Permite a los usuarios editar los detalles de un objeto existente. Los datos modificados se envían al backend utilizando una solicitud HTTP PUT.

```javascript
const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${id}`, objeto);
    navegacion('/objetos');
};
```

## Eliminar (ListadoObjetos.js)
Permite a los usuarios eliminar un objeto de la base de datos. La eliminación se realiza mediante una solicitud HTTP DELETE.

```javascript
const eliminarObjeto = async (id) => {
    try {
        await axios.delete(`${urlBase}/${id}`);
        cargarObjetos();
    } catch (error) {
        console.error("Error al eliminar objeto", error);
    }
};
```
## Buscar Objetos (ListadoObjetos.js)

Permite a los usuarios buscar objetos en la base de datos utilizando varios filtros (nombre, descripción, precio, fecha de creación). La búsqueda se realiza mediante una solicitud HTTP GET con parámetros de consulta.

```javascript
const buscarObjetos = async (e) => {
    e.preventDefault();
    try {
        const queryParams = new URLSearchParams(filtros).toString();
        const data = await findByFilters(filtros);
        setObjetos(data);
    } catch (error) {
        console.error('Error al buscar objetos', error);
    }
};
```

## Tecnologías Empleadas

### Frontend
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Bootstrap**: Framework CSS para el diseño responsivo.
- **Font Awesome**: Biblioteca de iconos vectoriales.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.

## Instalación y Ejecución

### Prerrequisitos
- Node.js y npm instalados en su máquina.

### Pasos
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tuusuario/frontend-react.git
    ```

2. Instalar las dependencias:
    ```bash
    cd frontend-react
    
    npm install
    ```

3. Ejecutar la aplicación:
    ```bash
    npm start
    ```

4. Acceder a la aplicación en [http://localhost:3000](http://localhost:3000).


## Componentes Principales

### Navegacion.js
Este componente define la barra de navegación de la aplicación, utilizando `react-router-dom` para la navegación entre diferentes rutas.

### AgregarObjeto.js
Este componente permite agregar un nuevo objeto mediante un formulario. Utiliza `axios` para enviar la solicitud POST al backend.

### EditarObjeto.js
Este componente permite editar un objeto existente. Utiliza `axios` para enviar la solicitud PUT al backend.

### ListadoObjetos.js
Este componente muestra una lista de todos los objetos y permite buscar, editar y eliminar objetos mediante interacciones con el backend.

### Bienvenida.js
Este componente muestra una página de bienvenida con información básica sobre la aplicación y enlaces a otras secciones importantes.
