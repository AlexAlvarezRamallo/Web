# Guía de inicio y registro de aprendizaje

Esta guía reúne los primeros pasos, las decisiones y las dudas resueltas al construir Kraken, una tienda de poteras artesanas para aprender desarrollo web y presentar en un portfolio.

Última actualización: 6 de noviembre de 2026. Se ampliará con los siguientes pasos y sus comprobaciones a medida que avance el proyecto. No es una transcripción literal de la conversación.

## 1. Entender las piezas

| Pieza | Responsabilidad |
| --- | --- |
| HTML | Estructura y significado del contenido |
| CSS | Apariencia y adaptación a distintas pantallas |
| JavaScript y TypeScript | Lógica de la aplicación; TypeScript añade comprobaciones de tipos |
| React | Interfaz del frontend mediante componentes |
| Node.js | Entorno que ejecuta JavaScript en el servidor y herramientas de desarrollo |
| PostgreSQL y SQL | Base de datos prevista y lenguaje para consultar sus datos |
| Vite | Servidor de desarrollo y generación del frontend para publicar |
| npm | Instalación de dependencias y ejecución de comandos del proyecto |
| ESLint | Análisis del código para detectar posibles problemas |

No hace falta añadir otro lenguaje de programación para desarrollar el backend: podremos utilizar TypeScript en ambas aplicaciones. Sí necesitaremos aprender las bases de JavaScript.

Un clic se gestiona primero en el frontend. Solo contacta con el backend si necesita consultar datos o solicitar una operación del servidor. Por ejemplo: React solicita el catálogo, el backend consulta la base de datos y devuelve los productos.

## 2. Requisitos y comprobaciones iniciales

Necesitamos un editor, Node.js con npm y acceso a Internet para descargar las dependencias. En este equipo utilizamos VS Code y PowerShell.

Versiones observadas al preparar el proyecto, no requisitos mínimos:

- Node.js: `v24.21.0`.
- npm: `11.19.0`.

Para comprobar tu instalación:

```powershell
node --version
npm.cmd --version
```

VS Code incluye soporte para JavaScript, TypeScript y JSX. No necesitamos instalar una extensión de React para empezar: React es una dependencia del proyecto, no una extensión del editor.

En este equipo, PowerShell bloqueaba `npm.ps1` por su política de ejecución. Utilizamos `npm.cmd`, que funciona sin modificar esa política. Los ejemplos siguientes están escritos para Windows y PowerShell; en otros entornos se utiliza normalmente `npm`.

## 3. Ejecutar el proyecto desde una copia del repositorio

Este es el camino habitual para alguien que descarga el proyecto. **No debe volver a ejecutar el generador de Vite.**

Desde la raíz de la copia local del repositorio:

```powershell
cd frontend
npm.cmd ci
npm.cmd run dev
```

`npm ci` instala las dependencias a partir de `package-lock.json`, que debe conservarse en el repositorio. Necesita que ese archivo y `package.json` sean coherentes.

Abre la dirección que muestre la terminal, normalmente `http://localhost:5173/`. Si el puerto está ocupado puede aparecer otro. Mantén la terminal abierta; `Ctrl + C` detiene el servidor.

Para volver a trabajar otro día, normalmente basta con entrar en `frontend` y ejecutar `npm.cmd run dev`. Reinstala las dependencias si faltan o han cambiado en el repositorio.

Actualmente solo está configurada la base del frontend. El backend, la base de datos y los servicios externos todavía no tienen instrucciones de ejecución porque no están implementados.

## 4. Cómo creamos el frontend desde cero

Esta sección registra la creación inicial. Sirve para repetir el aprendizaje en otra carpeta, no para ejecutarla de nuevo sobre una copia ya configurada.

En nuestro caso ya existía `D:\web\frontend` con carpetas organizativas y archivos `.gitkeep`.

```powershell
cd D:\web\frontend
npm.cmd create vite@latest . -- --template react-ts
```

- `create vite@latest` ejecuta el generador de Vite disponible en ese momento.
- `.` indica que se utilizará la carpeta actual.
- `--template react-ts` selecciona React con TypeScript.

El generador utilizado en esta sesión fue `create-vite@9.3.4`. Usar `@latest` en el futuro puede generar versiones, preguntas y archivos diferentes. Para reproducir las dependencias de este repositorio, utiliza el procedimiento de la sección anterior.

### Preguntas del asistente de creación

| Pregunta | Respuesta elegida | Motivo |
| --- | --- | --- |
| `Ok to proceed? (y)` | `y` | Descargar y ejecutar el generador |
| `Current directory is not empty` | `Ignore files and continue` | Conservar las carpetas organizativas existentes |
| `Which linter to use?` | `ESLint` | Configurar el análisis del código |
| `Install with npm and start now?` | `No` | Ejecutar la instalación y el arranque por separado para entenderlos |

Las opciones se seleccionan con las flechas y se confirman con Enter. No elegimos `Remove existing files and continue` porque elimina contenido. La opción de ignorar no sustituye a una copia de seguridad: en nuestro caso se aplicó a carpetas con marcadores, antes de escribir código propio.

Después ejecutamos por separado:

```powershell
npm.cmd install
npm.cmd run dev
```

`npm install` descarga las dependencias en `node_modules` y genera o actualiza `package-lock.json`. `npm run dev` ejecuta el comando `dev` declarado en `package.json`.

Referencia del procedimiento: [guía oficial de Vite](https://vite.dev/guide/).

## 5. Archivos que debemos conocer

| Archivo o carpeta | Función |
| --- | --- |
| `frontend/index.html` | Documento HTML que carga la aplicación |
| `frontend/src/main.tsx` | Punto de entrada que monta React en la página |
| `frontend/src/App.tsx` | Componente principal de la plantilla |
| `frontend/src/pages/` | Páginas completas que crearemos, como `HomePage.tsx` |
| `frontend/src/components/` | Piezas reutilizables, como una tarjeta de producto |
| `frontend/src/styles/` | Carpeta prevista para estilos generales |
| `frontend/package.json` | Dependencias y comandos disponibles |
| `frontend/package-lock.json` | Registro de las versiones y resolución de dependencias |
| `frontend/vite.config.ts` | Configuración de Vite |
| `frontend/tsconfig*.json` | Configuración de TypeScript |
| `frontend/eslint.config.js` | Configuración del análisis de código |
| `frontend/node_modules/` | Dependencias instaladas; no se sube al repositorio |

Cada aplicación tiene su propio `src`: no necesitamos otro `src` en la raíz. Los `.gitkeep` conservan carpetas vacías en Git y pueden retirarse cuando haya contenido.

## 6. Comandos de comprobación

Ejecutar dentro de `frontend`:

```powershell
npm.cmd run lint
npm.cmd run build
```

- `lint` analiza el código con ESLint.
- `build` ejecuta la comprobación de TypeScript y genera el frontend en `dist`.

Después de generar la compilación, `npm.cmd run preview` permite revisarla localmente. No es un despliegue de producción.

Estos comandos están definidos en el proyecto; esta guía no afirma que ya se hayan ejecutado correctamente. Tampoco sustituyen a las pruebas de comportamiento. Aún no existe un comando `test`: las carpetas de pruebas están preparadas, pero sus herramientas están pendientes. Consulta la [estrategia de pruebas](testing.md).

## 7. Dudas resueltas y decisiones iniciales

### ¿Frontend primero o backend primero?

Empezaremos con una ficha de producto y un catálogo con datos de ejemplo. Después conectaremos pronto un recorrido completo con el backend. No construiremos toda la interfaz antes de aprender cómo circulan los datos.

### ¿Qué estilo visual seguiremos?

El boceto de Kraken utiliza azul casi negro, azul petróleo, crema y detalles dorados; títulos con serif, fotografía protagonista, colección y sección del taller. Las capturas sirven como referencia. Las imágenes ilustrativas deberán sustituirse por fotografías reales antes de presentar productos a la venta.

### ¿Cómo se conectarán pagos y correos?

Son integraciones pendientes. El proveedor procesará el pago y el backend verificará su aviso o *webhook* antes de marcar el pedido como pagado y solicitar el correo de confirmación. Las credenciales privadas permanecerán en el servidor. Empezaremos con pagos de prueba.

### ¿Qué ocurre con los textos legales y las cookies?

Se revisarán antes de activar ventas reales y se adaptarán al titular, los datos tratados y los servicios elegidos. No copiaremos textos de otra tienda ni presentaremos borradores como textos definitivos. El panel de consentimiento dependerá de las tecnologías utilizadas; la revisión legal y técnica sigue pendiente.

Fuentes para esa revisión: [LSSI](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758), [información de privacidad de la AEPD](https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos/derecho-de-informacion), [guía de cookies de la AEPD](https://www.aepd.es/guias/guia-cookies.pdf) y [normativa de consumidores](https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555).

## 8. Estado y siguiente paso

### Primera instalación y auditoría de dependencias

Resultados comunicados desde la terminal durante la configuración inicial:

- `npm.cmd install`: instalación completada; 10 avisos de severidad moderada en la cadena de dependencias de desarrollo asociada a `minimatch` (aviso `GHSA-g3hv-75wg-m249`).
- `npm.cmd run dev`: Vite arrancó y mostró `http://localhost:5173/`. Una captura posterior aportada por el usuario confirmó que la página inicial de React y Vite se muestra en el navegador.
- `npm.cmd audit fix --dry-run`: no propuso una corrección dentro de los rangos permitidos. No se aplicó una corrección forzada.
- `npm.cmd outdated`: solo mostró nuevas versiones principales de `@types/node` y TypeScript; no se actualizaron por este aviso.
- `npm.cmd audit --omit=dev`: `found 0 vulnerabilities`.

La auditoría de dependencias de producción no detectó vulnerabilidades conocidas en esa consulta. Esto no equivale a una revisión de seguridad completa ni elimina los avisos de desarrollo. La actualización compatible de la cadena de `minimatch` queda pendiente; no se ejecutó `npm audit fix --force`. Los resultados pueden cambiar cuando se actualicen las dependencias o la base de avisos de npm.

Comprobado en los archivos el 6 de noviembre de 2026: existe la plantilla de React, TypeScript y Vite, con ESLint, `package-lock.json` y una carpeta `node_modules`. El servidor arrancó según la salida de terminal aportada y la captura del usuario confirmó la visualización de la página inicial. Queda por ejecutar lint y build. La tienda personalizada aún no está implementada.

### Qué significa la primera página del navegador

- Es la plantilla de ejemplo del frontend, no la tienda Kraken terminada.
- `localhost` identifica el propio ordenador y `5173` es el puerto utilizado por Vite en esta ejecución. La página no está publicada en Internet.
- El botón del contador sirve para practicar eventos y estado de React: al pulsarlo, el ejemplo incrementa un valor en memoria. No necesita el backend ni guarda datos en una base de datos.
- El mensaje sobre editar `src/App.tsx` se refiere a `frontend/src/App.tsx`. Al guardar cambios, Vite actualiza la página durante el desarrollo; HMR significa sustitución de módulos en caliente.
- Los enlaces de documentación y comunidad son recursos de la plantilla y no forman parte de la futura tienda.

Se creó la primera página `frontend/src/pages/HomePage.tsx` con un título y una descripción, y `App.tsx` la importa y muestra mediante `<HomePage />`. Se retiró el contenido de ejemplo de `App.tsx`.

En su primera revisión se corrigieron dos errores:

- El archivo se había llamado `HomePage.ts`. Como contiene JSX (etiquetas como `<main>`), se renombró a `HomePage.tsx`.
- La etiqueta final era `<main>`, que abre otro elemento. Se sustituyó por `</main>` para cerrar el contenido principal.

La importación `./pages/HomePage` no necesita cambiar al renombrar la extensión. Tras la corrección, `npm.cmd run build` y `npm.cmd run lint`, ejecutados dentro de `frontend`, finalizaron correctamente. Esto verifica la compilación y el análisis estático; queda comprobar visualmente esta primera página en el navegador y después trabajar sus estilos y una ficha de producto.

### Portada con imagen de fondo y revisión de cambios

Se añadió `frontend/src/assets/portada.png`, importada desde `HomePage.tsx` como `portada`, y se creó `frontend/src/styles/HomePage.css`, importado por la página. La primera sección contiene el título y la descripción sobre la imagen; la segunda sección contiene la introducción a la colección.

Para usar una imagen importada en JSX:

```tsx
style={{ backgroundImage: `url(${portada})` }}
```

Las llaves exteriores permiten una expresión JavaScript y las interiores forman el objeto de estilos. La interpolación inserta la dirección gestionada por Vite; una cadena como `"url($portada.png)"` no utiliza la variable.

En la revisión se detectó que faltaba `className="portada"` en la primera sección. El fondo estaba definido, pero las reglas `.portada` (altura, recorte, oscurecimiento y distribución) no se aplicaban. Se añadió esa clase. También se añadió `color: inherit` a los títulos de ambas secciones para que el color global de la plantilla no sustituya los colores de sus secciones, y `line-height: 1.1` al título de portada para evitar líneas demasiado juntas cuando se divide en varias líneas.

`min-height` establece la altura mínima y permite crecer al contenido; `padding` añade espacio interior. Estos valores se ajustan en el CSS. Los `.gitkeep` pueden retirarse cuando la carpeta contiene archivos que se guardarán en Git; mantenerlos no rompe la aplicación.

La compilación y ESLint finalizaron correctamente antes y después de las correcciones. Queda revisar visualmente escritorio y móvil. `index.css` todavía conserva estilos de la plantilla, incluido el ancho máximo del contenedor (`#root`, 1126 px); `App.css` conserva reglas de ejemplo pero ya no está importado. La cabecera compartida todavía no está creada. El siguiente paso es revisar el aspecto y decidir cómo sustituir los estilos globales de la plantilla.

### Primer registro en Git y conexión con GitHub

Repositorio remoto: [AlexAlvarezRamallo/Web](https://github.com/AlexAlvarezRamallo/Web). Se comprobó que no tenía ramas antes de preparar la primera subida.

Comandos desde la raíz del proyecto para esta primera publicación:

```powershell
git init -b main
git remote add origin https://github.com/AlexAlvarezRamallo/Web.git
git add .
git diff --cached --stat
git diff --cached --check
git commit -m "Inicializa Kraken con frontend React y guia de aprendizaje"
git push -u origin main
```

`git init` crea el historial local; `origin` identifica el repositorio remoto; `git add` prepara una instantánea; `commit` la registra y `push` la envía a GitHub. No hay que repetir `init` ni `remote add` en las siguientes sesiones. Antes de cada commit, revisar `git status` y los cambios que se van a incluir.

Se comprobó que los archivos preparados excluyen `node_modules`, `dist`, archivos `.env` privados y registros como `debug.log`, según `.gitignore`. También se revisaron patrones habituales de claves privadas sin encontrar coincidencias; esa búsqueda no sustituye una revisión completa.

Durante la preparación, Git detectó propietarios diferentes entre la sesión aislada del asistente y el usuario de Windows. Se utilizó `git -c safe.directory=D:/web ...` para confiar únicamente en esta ruta durante los comandos necesarios; no se cambió la configuración global. La conexión a GitHub requirió ejecutar los comandos con acceso de red fuera de la sesión aislada. Este detalle corresponde al entorno del asistente y normalmente no será necesario en la terminal del propietario del proyecto.

La compilación y ESLint finalizaron correctamente antes del primer commit (`050b438`). La primera subida a `main` se completó y la rama local quedó vinculada a `origin/main`. Para comprobar la sincronización se utilizan `git status` y `git ls-remote origin refs/heads/main`, comparando este último resultado con `git rev-parse HEAD`.

## Cómo continuar este registro

### Segunda página: catálogo de poteras (7 de noviembre de 2026)

Se creó `frontend/src/pages/PoterasPage.tsx` con una portada propia, el texto sobre tamaños y tres tarjetas de productos. Su fondo está en `frontend/src/assets/portadapagepoteras.png` y sus estilos en `frontend/src/styles/PoterasPage.css`. `ProductCard.tsx` está creado pero todavía vacío; las tarjetas siguen escritas directamente en la página y utilizan clases definidas en `HomePage.css`, pendiente de extraer a un componente compartido.

`App.tsx` comprueba `window.location.pathname`: muestra el catálogo para `/poteras` y el inicio para las demás rutas. Los enlaces de la cabecera usan `/poteras`; Inicio y Sobre nosotros regresan a las secciones del inicio. Esta navegación utiliza enlaces normales con recarga. Al desplegar habrá que configurar el servidor para servir `index.html` al acceder directamente a `/poteras`.

Durante el desarrollo se corrigieron un `>` que faltaba al abrir `<section>`, una variable de imagen que no coincidía con la importación y la importación del CSS equivocado. Un salto de línea entre `()` y `=>` también impedía compilar. Si VS Code detecta que el archivo cambió en disco mientras estaba abierto, utilizar Comparar antes de guardar para conservar los cambios necesarios.

Antes del commit `SegundaPage`, se ejecutaron `npm.cmd run build` y `npm.cmd run lint` desde `frontend`: ambos finalizaron correctamente. Queda revisar visualmente el catálogo y la navegación en escritorio y móvil. Desde la raíz se registra y sube con `git add frontend docs/getting-started.md`, `git commit -m "SegundaPage"` y `git push origin main`.

### Avances del 7 de noviembre de 2026

Se diseñó la página de inicio con portada, tres tarjetas de poteras, presentación artesanal y una sección de opiniones todavía vacía. Se creó la cabecera compartida en `frontend/src/components/Header.tsx`, con sus estilos en `Header.css`, logo importado, enlaces a las secciones y menú desplegable en móvil. La cabecera utiliza `position: sticky`, `top: 0` y `z-index: 100` para mantenerse visible al desplazarse.

Los estilos propios del inicio se agruparon en `frontend/src/styles/HomePage.css`. Se eliminó `App.css` y su importación, retirando estilos de ejemplo y consolidando las reglas duplicadas de la sección de productos. `index.css` sigue conteniendo estilos globales de la plantilla pendientes de revisar. Los bordes redondeados se aplican al contenedor `.acabado` con `overflow: hidden` para recortar conjuntamente imagen y texto.

Se corrigió la referencia al logo: hay que importar el archivo y utilizar la variable en `src={logo}`, en lugar de escribir `src={Logo.png}`. Se comprobaron compilación y ESLint con `npm.cmd run build` y `npm.cmd run lint` desde `frontend`; tras el último ajuste del logo se volvió a comprobar la compilación. La captura aportada por el usuario muestra el diseño de escritorio; queda revisar la interacción y el aspecto en móvil.

El commit `4e36cad`, con mensaje `cabecera_con_pag_principal`, se subió a `origin/main`. Después se añadió la captura proporcionada por el usuario en `docs/images/image.png` y se enlazó desde el README mediante una ruta relativa para mostrarla en GitHub.

Para registrar esta actualización, desde la raíz del proyecto:

```powershell
git add README.md docs/getting-started.md docs/images/image.png
git diff --cached --check
git commit -m "docs: añade vista previa de Kraken al README"
git push origin main
```

El siguiente paso es revisar la cabecera en móvil y continuar con el pie compartido y el catálogo. El backend, los pedidos y los pagos siguen pendientes.

Para cada avance, añadiremos el objetivo, los archivos afectados, los comandos y su carpeta de ejecución, las dudas resueltas y el resultado comprobado. Diferenciaremos siempre lo previsto de lo implementado y de lo verificado. No incluiremos contraseñas ni claves privadas.
