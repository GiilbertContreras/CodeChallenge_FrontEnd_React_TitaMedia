# Code Challenge(Desafío de Código) "Front End" -- *Tita Media* - *Gratitude Team(Area Gratitud)* - *titamedia.com*
--------------------------------------------

## Descripción

Este proyecto construido en **React**, directorio organizado **Atomic Design**, abarca competencias en:
1. Consumo de API externa:
    a. [Api_REST] [PokeAPI] [GraphQL] (https://beta.pokeapi.co/graphql/v1beta2/console/): 
        - **Obtener:** Tener los 1025 *Pokémon*.

2. Desarrollo Frontend:
    a. Proceso de "UX" a hojas de estilos, (https://www.figma.com/file/cKzrltoJ2p58wEMTPx6LsJ/Pok%C3%A9dex-(Community)?type=design&node-id=314%3A3&mode=dev):
        - **Crear *Pokémon*:** Formulario Incluir Nuevo *Pokémon*, el nombre debe tener al menos 3 caracteres y no contener caracteres especiales.
        - **Discriminar *Pokémon* - Campo(input) Digitable:** Filtrar automaticamente por la lista completa o de favoritos de *Pokémon*.
        - **Filtrar *Pokémon* - Campo(input) Digitable:** Campo digitable para buscar por nombre o numero de *Pokémon*.
        - **Ordenar *Pokémon* - Boton(button) Desplegable al SubMenu:** SubMenu(radio-box) ordenar por nombre o numero de *Pokémon*.
        - **Explorar** los 1302 *Pokémon* ordenados alfabéticamente y numericamente y paginados.
        - **Visualizar Detalles Completos**: Modal descripcion nombre, codigo, favorito, imagen, tipos, generación, peso y altura.
        - **Gestionar una lista de favoritos** Con almacenamiento por sesion o volatil y actualización en tiempo real.

3. Arquitectura de Componentes Escalable:
    a. Aplicación de la metodología **Atomic Design**:
        - **Atoms** → componentes básicos.
        - **Molecules** → combinaciones simples.
        - **Organisms** → estructuras completas reutilizables.
    b. GraphQL:
        - **mutations** → Implican interacciones que combinan cambios sobre datos.
        - **queries** → piezas mínimas de obtención de datos.

----------------------

## Tecnologías

1. Frontend:
    a. React 18.

2. Estilos:
    b. Hojas de Estilos (css)
        - Diseño Perzonalizado.
        - Diseño responsivo.

3. API / Datos:
    a. Apollo Client.
    b. GraphQL (consultas, mutaciones, manejo de caché).
    c. PokeAPI GraphQL v1beta2.

4. Herramientas de Calidad:
    a. ESLint.
    b. Prettier.

5. Contenedores / Control de Versiones / Despliegue:
    a. Docker.
        - Node.js 20-alpine.
    b. `serve` - GitHub.
    c. `serve` - producción.
    

----------------------

## Requisitos

1. Docker ≥ 20
2. Docker Compose ≥ 2
3. Navegador (Chrome, Edge, Firefox)
4. Conexión a Internet para consumir PokeAPI

-------------------------

## Instalación y ejecución (localhost)

1. Clonar el repositorio:
    *bash*
        `git clone <REPO_URL>`
        `cd pokedex-react-docker`
    *fin bash*

2. Construir y levantar la aplicación con Docker:
    *bash*
        `docker-compose up --build`
    *fin bash*

3. Abrir en navegador:
    *bash*
        `http://localhost:3000`
    *fin bash*

4. Para detener la aplicación:
    *bash*
        `docker-compose down`
    *fin bash*


## Estructura del proyecto

/pokedex-react-docker
├── /public
│   │   favicon.png: Icono de la aplicación mostrado en la pestaña del navegador
│   └── index.html: Punto de entrada HTML principal que carga la app React
├── /src
│   ├── /assets
│   │   │   ├── logo.png: Logotipo de la aplicación utilizado en el Header u otras vistas
│   ├── /components: Organizacion atomic design
│   │   ├── /atoms
│   │   │   ├── Badge.js: Componente atómico para mostrar etiquetas o categorías
│   │   │   └── StatBar.js: Barra visual para representar estadísticas de un Pokémon
│   │   ├── /molecules
│   │   │   ├── PokemonCard.js: Tarjeta que muestra imagen, número y nombre de un Pokémon
│   │   │   ├── SearchBar.js: Barra de búsqueda con filtro por nombre o número de Pokémon
│   │   │   └── SortSelector.js: Selector para ordenar la lista de Pokémon (por nombre o número)
│   │   └── /organisms
│   │       ├── AddPokemonModal.css: Estilos del modal para agregar Pokémon favoritos
│   │       ├── AddPokemonModal.js: Modal para agregar un Pokémon a la lista de favoritos
│   │       ├── FavoritesList.js: Lista que muestra los Pokémon agregados a favoritos
│   │       ├── Header.css: Estilos del encabezado principal
│   │       ├── Header.js: Encabezado con logo y controles de navegación
│   │       ├── PokemonDetail.js: Vista con información detallada de un Pokémon
│   │       ├── PokemonList.css: Estilos para la cuadrícula de tarjetas Pokémon
│   │       └── PokemonList.js: Contenedor que renderiza y gestiona la lista de Pokémon
│   ├── /graphql
│   │   ├── mutations.js: Definición de mutaciones GraphQL (agregar, actualizar, eliminar Pokémon)
│   │   └── queries.js: Consultas GraphQL para obtener lista y detalles de Pokémon
│   ├── /hooks
│   │   └── usePokemon.js: Custom hook para manejar lógica de carga, búsqueda y orden de Pokémon
│   ├── App.js: Componente raíz de la aplicación React, ensambla los organismos y rutas
│   └── index.js: Punto de entrada React; renderiza <App /> dentro de index.html
├── docker-compose.yml: Orquesta los contenedores: app, db, servicios externos
├── Dockerfile: Construcción del contenedor React para producción
├── package.json: Dependencias, scripts y configuración de NPM
└── README.md: Guía básica de instalación, uso y despliegue de la aplicación

----------------------

## Funcionalidades

1. **Listado de Pokémon**

   * Orden alfabético.
   * Carga paginada o completa según diseño.

2. **Detalle del Pokémon**

   * Nombre, tipo, imagen, generación, altura, peso.
   * Acceso desde la lista o búsqueda.

3. **Favoritos**

   * Agregar y remover Pokémon.
   * Persistencia local (state o localStorage).

4. **Filtros**

   * Por tipo de Pokémon.
   * Interfaz interactiva y responsiva.

5. **Validación**

   * Nombres válidos (mínimo 3 caracteres, sin caracteres especiales).
   * Validación en formularios de favoritos y filtros.


----------------------

## Referencias

* [PokeAPI GraphQL](https://beta.pokeapi.co/graphql/console/)
* [React Official Docs](https://reactjs.org/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)


----------------------

## Posibles mejoras
* Integración con **Redux** para estado global más complejo.
* Testeo completo de todos los componentes.
* Implementación de dark mode y mejoras de UX según mockup Figma.