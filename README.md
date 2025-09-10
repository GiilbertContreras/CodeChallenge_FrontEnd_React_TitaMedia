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
    b. `https://github.com/GiilbertContreras/CodeChallenge_FrontEnd_React_TitaMedia.git` - GitHub.
    c. `https://codechallengetita-f046867daff6.herokuapp.com/` - producción.
    

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
        `git clone https://github.com/GiilbertContreras/CodeChallenge_FrontEnd_React_TitaMedia.git`
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
│   ├── *favicon.png:* Icono de la app en la pestaña del navegador
│   └── *index.html:* HTML principal que carga la app React
├── /src
│   ├── /assets
│   │   ├── *default-pokemon.png:* Imagen por defecto de un Pokémon
│   │   └── *logo.png:* Logotipo de la app
│   ├── /components
│   │   ├── /atoms
│   │   │   ├── *Button/:* Componente botón genérico
│   │   │   ├── *FavoriteIcon/:* Icono de favorito
│   │   │   ├── *FilterIcon/:* Icono de filtro
│   │   │   ├── *IconPlus/:* Icono de agregar
│   │   │   ├── *Input/:* Componente de entrada de texto
│   │   │   ├── *Logo/:* Componente de logotipo
│   │   │   ├── *Platform/:* Icono o información de plataforma
│   │   │   ├── *PokemonId/:* Muestra el ID de un Pokémon
│   │   │   ├── *PokemonImage/:* Muestra la imagen de un Pokémon
│   │   │   ├── *PokemonName/:* Muestra el nombre de un Pokémon
│   │   │   ├── *RadioButton/:* Botón de opción
│   │   │   ├── *SearchIcon/:* Icono de búsqueda
│   │   │   └── *Title/:* Componente de título
│   │   ├── /molecules
│   │   │   ├── *ButtonAddPokemon/:* Botón para agregar Pokémon
│   │   │   ├── *ButtonFilterFavorites/:* Botón para filtrar favoritos
│   │   │   ├── *Imagotipo/:* Componente de imagotipo
│   │   │   ├── *OrderSelector/:* Selector de orden
│   │   │   ├── *PokemonCard/:* Tarjeta de Pokémon
│   │   │   ├── *SearchBar/:* Barra de búsqueda
│   │   ├── /organisms
│   │   │   ├── *FavoritesList.js:* Lista de Pokémon favoritos
│   │   │   ├── *Header.js:* Encabezado principal
│   │   │   ├── *PokemonList.js:* Lista de Pokémon
│   │   │   └── *PokemonModal.js:* Modal de información de Pokémon
│   │   ├── /pages
│   │   │   └── *HomePage.js:* Página principal
│   │   └── /templates
│   │       └── *MainTemplate.js:* Plantilla principal
│   ├── /graphql
│   │   ├── *mutations.js:* Mutaciones GraphQL
│   │   └── *queries.js:* Consultas GraphQL
│   ├── /hooks
│   │   └── *usePokemon.js:* Lógica de Pokémon
│   ├── /utils
│   │   └── *validation.js:* Funciones de validación
│   ├── *App.js:* Componente raíz
│   ├── *index.css:* Hoja de Estilo Global
│   └── *index.js:* Entrada de React
├── *docker-compose.yml:* Orquestador de contenedores
├── *Dockerfile:* Construcción de la app React
├── *package.json:* Dependencias y scripts
└── *README.md:* Guía de uso

----------------------

## Funcionalidades

1. Listado de Pokémon

    - Visualización completa de la lista de Pokémon usando PokemonList.js y tarjetas PokemonCard.

    - Orden configurable por nombre o número con SortSelector.js.

    - Paginación implementada para carga eficiente de los Pokémon.

2. Detalle del Pokémon

    - Información completa: nombre, tipo(s), imagen (PokemonImage), generación, altura y peso.

    - Acceso desde la lista (PokemonCard) o mediante búsqueda (SearchBar).

    - Modal dinámico (PokemonModal.js) para ver detalles y navegación entre Pokémon.

3. Gestión de Favoritos

    - Agregar Pokémon a favoritos con ButtonAddPokemon o iconos de favorito (FavoriteIcon).

    - Quitar Pokémon de favoritos desde la lista de favoritos (FavoritesList.js).

    - Persistencia local en estado o localStorage.

    - Los Pokémon nunca se eliminan de la lista principal.

4. Filtros Interactivos

    - Filtrado por tipo de Pokémon usando botones o selectores (ButtonFilterFavorites, OrderSelector).

    - Interfaz responsiva y dinámica, soportando subacordeones y badges para selección múltiple.

5. Búsqueda y Validación

    - Búsqueda por nombre con SearchInput.js.

    - Validación de entradas: nombres con mínimo 3 caracteres y sin símbolos.

    - Aplicada en formularios de favoritos y filtros mediante validation.js.

6. Plantillas y Organización

    - Uso de MainTemplate.js para estructura principal de la app.

    - Componentes organizados siguiendo Atomic Design: atoms, molecules, organisms y pages.

7. Integración GraphQL

    - Consultas (queries.js) para obtener datos de Pokémon.

8. Experiencia Visual y Responsiva

    - Imágenes de Pokémon (PokemonImageWrapper) con placeholder (default-pokemon.png).

    - Diseño adaptable con componentes reutilizables y estilizados.


----------------------

## Referencias

* [PokeAPI GraphQL](https://beta.pokeapi.co/graphql/console/)
* [React Official Docs](https://reactjs.org/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)