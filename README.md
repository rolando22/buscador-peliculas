# Repositorio proyecto prueba técnica para Juniors y Trainees con React

El proyecto fue creado mientras realizaba el curso de React 2023 de Midudev [Aprende a pasar una Prueba Técnica de React. Entiende useMemo, useCallback y useRef](https://www.youtube.com/@midulive).

Este repositorio contiene el código de una aplicación para obtener información de películas una API, mostrando al usuario título, año de estreno y poster.

- Desarrollada con React para manipulación del DOM y reactividad de la aplicación.
- Vite como empaquetador y SWC como transpilador.
- Uso de customHooks:
    - Para manejar el servicio encargado de realizar la petición a la API y useState para manejar los estados de la petición.
    - Para manjear el estado de la búsqueda, controlar errores y evitar que se vuelva a hacer la misma petición a la API si es igual a la última.
- useCallBack para evitar que la función encargada de ejecutar el servicio de la API y la función encargada de poner un delay a la petición en la búsqueda automática se vuelvan a crear en cada renderizado.
- useMemo para evitar que el cálculo para ordenar las películas se vuelva a ejecutar en cada renderizado.
- Función debounce para poner un delay a la petición en la búsqueda automática y no hacer peticiones en cada carácter tipeado.

Puedes ver el demo aquí: ().

# Prueba técnica para Juniors de React.

Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/
Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

- Necesita mostrar un input para buscar la película y un botón para buscar.

- Lista las películas y muestra el título, año y poster.

- Que el formulario funcione

- Haz que las películas se muestren en un grid responsive.

- Hacer el fetching de datos a la API

Primera iteración:

- Evitar que se haga la misma búsqueda dos veces seguidas.

- Haz que la búsqueda se haga automáticamente al escribir.

- Evita que se haga la búsqueda continuamente al escribir (debounce)
