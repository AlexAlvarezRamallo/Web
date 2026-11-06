# Estructura del proyecto

El frontend y el backend tienen su propia carpeta `src`, donde irá su código fuente. No necesitamos otra carpeta `src` en la raíz.

```text
web/
├── frontend/
│   ├── public/                Recursos públicos servidos directamente
│   ├── src/
│       ├── assets/           Imágenes y otros recursos importados desde el código
│       ├── components/       Componentes reutilizables de React
│       ├── pages/            Páginas de la tienda
│       ├── services/         Peticiones al backend
│       └── styles/           Estilos generales
│   └── tests/
│       ├── unit/             Funciones independientes
│       └── components/       Interacciones con componentes de React
├── backend/
│   ├── src/
│   │   ├── config/           Lectura y validación de la configuración
│   │   ├── modules/
│   │   │   ├── products/     Catálogo y existencias
│   │   │   ├── orders/       Pedidos
│   │   │   └── auth/         Autenticación y autorización
│   │   ├── integrations/
│   │   │   ├── payments/     Conexión con el proveedor de pagos
│   │   │   └── email/        Conexión con el servicio de correo
│   │   └── middleware/       Tratamiento común de las peticiones HTTP
│   └── tests/
│       ├── unit/             Reglas de negocio aisladas
│       └── integration/      API, base de datos y conexión entre piezas
├── database/
│   ├── migrations/           Cambios versionados en la estructura de datos
│   └── seeds/                Datos de ejemplo para desarrollo
├── tests/
│   └── e2e/                  Recorridos completos desde el navegador
├── docs/                     Documentación técnica
├── .gitignore
└── README.md
```

## Criterios de organización

La [estrategia de pruebas](testing.md) describe qué verificaremos en cada nivel.

- El frontend muestra la interfaz y se comunica con el backend mediante una API.
- El backend valida las peticiones, aplica las reglas del negocio y accede a la base de datos y a los servicios externos.
- Los módulos del backend agrupan el código por funcionalidad. Separaremos las reglas de negocio, los casos de uso y el acceso a datos cuando implementemos cada módulo y esa separación resulte necesaria.
- Las credenciales privadas se guardarán en variables de entorno del backend. No deben incluirse en el frontend ni en el repositorio.
- Los archivos `.gitkeep` permiten conservar las carpetas vacías en Git. Se pueden retirar cuando esas carpetas tengan contenido.

Esta estructura es una base organizativa. Todavía no hay aplicaciones ejecutables ni dependencias instaladas. Los archivos de entrada, la configuración de TypeScript y los comandos de desarrollo se añadirán al configurar React y Node.js.
