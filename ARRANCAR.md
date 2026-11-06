# Cómo arrancar la página en local

Abre una terminal en VS Code y ejecuta:

```powershell
cd D:\web\frontend
npm run dev
```

Deja la terminal abierta mientras uses la página. Abre la dirección que muestre el servidor, normalmente:

http://localhost:5173/

Si el puerto 5173 está ocupado, el servidor puede mostrar otro puerto: usa la dirección indicada en la terminal.

## Primera vez

Necesitas Node.js y npm instalados. Antes de arrancar por primera vez, instala las dependencias desde la carpeta `frontend`:

```powershell
npm install
```

Después ejecuta `npm run dev`.

## Parar y volver a arrancar

- Para detener el servidor, pulsa `Ctrl+C` en la terminal.
- Si cierras la terminal o reinicias el ordenador, vuelve a ejecutar los comandos de arranque.
- Si la página no carga, comprueba que la terminal del servidor sigue abierta y que estás usando la dirección que muestra.
