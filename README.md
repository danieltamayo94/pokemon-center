# poke-api

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### Unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Tecnologías:

VueJs:
vue cli (Creación del proyecto)
pinia(Store de Vue)
vue-router (Para el sistema de ruteo)
Jest (Para el testing)

Javascript (Scripts para funcionalidad)
CSS (Estilos)
HTML (Maquetación)
Babel (Para transpilar Javascript haciendolo compatible con diferentes navegadores)
Figma (Fue únicamente usado para validar el diseño e implementación del mismo a nivel de código) 

Estructura del proyecto mejor definida

POKE-API/
├── coverage/                # Archivos generados por Jest (cobertura de tests)
├── node_modules/            # Dependencias del proyecto
├── public/                  # Archivos públicos (favicon, index.html, etc.)
│   ├── img/
│   ├── favicon.ico
│   └── index.html
├── src/                     # Código fuente principal
│   ├── assets/styles             # Estilos con las variables css.
│   ├── components/          
│   │   ├── shared-components/ # Componentes reutilizables
│   │   ├── HomePage.vue     # Componente usado para la vista principal 
│   │   └── WelcomePage.vue  # Vista de bienvenida
│   ├── composables/         # Funciones reutilizables con Composition API
│   ├── router/              # Configuración de rutas (Vue Router)
│   ├── services/            # Servicios o lógica de acceso a API
│   ├── stores/              # Stores (Pinia para manejo de estado)
│   ├── App.vue              # Componente raíz
│   └── main.js              # Punto de entrada de la aplicación
├── tests/                   # Pruebas unitarias (Jest)
├── .gitignore               # Archivos y carpetas ignoradas por Git
├── babel.config.js          # Configuración de Babel
├── jest.config.js           # Configuración de Jest
├── jsconfig.json            # Soporte para rutas alias y autocompletado
├── package.json             # Información y dependencias del proyecto
├── package-lock.json        # Versiones fijas de las dependencias
├── README.md                # Documentación del proyecto
└── vue.config.js            # Configuración personalizada de Vue CLI
