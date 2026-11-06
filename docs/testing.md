# Estrategia de pruebas

Las carpetas de pruebas están preparadas. Todavía no hay pruebas implementadas ni herramientas de ejecución configuradas; las añadiremos junto con cada funcionalidad.

## Organización

| Carpeta | Qué comprueba | Ejemplo previsto |
| --- | --- | --- |
| `frontend/tests/unit/` | Funciones independientes de la interfaz | Calcular el total de un carrito |
| `frontend/tests/components/` | Componentes y su interacción con el usuario | Añadir una potera al carrito y mostrar la cantidad |
| `backend/tests/unit/` | Reglas de negocio aisladas | Rechazar un pedido con cantidades no válidas |
| `backend/tests/integration/` | API, base de datos y conexión entre piezas | Crear un pedido y comprobar su persistencia |
| `tests/e2e/` | Recorridos completos desde el navegador | Elegir un producto, añadirlo al carrito y completar un pedido de prueba |

## Prioridades

- Comprobar precios y cantidades en el servidor, sin confiar en los valores enviados por el navegador.
- Evitar pedidos que superen las existencias disponibles.
- Proteger las operaciones de administración frente a accesos sin autorización.
- Verificar los avisos del proveedor de pagos y procesar avisos repetidos sin duplicar sus efectos.
- Confirmar que un pago rechazado no marca el pedido como pagado.
- Comprobar la solicitud del correo de confirmación y el tratamiento de errores del servicio de correo.
- Verificar el flujo principal de compra y los errores que debe poder entender el cliente.

## Datos y servicios de prueba

Las pruebas usarán datos de ejemplo y una base de datos de pruebas separada de la de producción. Las pruebas automáticas habituales simularán pagos y correos para evitar cobros y envíos reales. Las comprobaciones con proveedores externos se harán en sus entornos de pruebas cuando estén disponibles.

Las herramientas y los comandos concretos se documentarán cuando configuremos las aplicaciones. No necesitamos probar cada archivo: daremos prioridad a las reglas del negocio y a los comportamientos importantes para el usuario.
