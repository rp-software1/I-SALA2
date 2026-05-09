BLOQUE A:

¿Qué prefijo necesitan las variables de entorno de Next.js para que sean accesibles en el browser? ¿Y si solo necesitan estar en el servidor?
Prefijo para variables accesibles en el browser: NEXT_PUBLIC_
Prefijo para variables solo del servidor: ninguno (no llevan prefijo)
BLOQUE B:

MesasPage llama a getMesas() con await. Si el backend tarda 2 segundos en responder, ¿qué ve el usuario durante esos 2 segundos? ¿Una pantalla en blanco, el layout con NavBar, o el skeleton de loading.tsx?
El usuario ve durante el fetch: ___________
¿Quién muestra el loading — MesasPage o loading.tsx? ___________
El usuario ve durante el fetch: el layout con NavBar y el skeleton de loading.tsx.
¿Quién muestra el loading — MesasPage o loading.tsx? loading.tsx.

BLOQUE C:
¿error.tsx captura errores de JavaScript (como un error de sintaxis en el código) o solo errores del fetch (como un 500 del backend)?
error.tsx captura: errores de runtime y errores lanzados durante el fetch o renderizado de la página, no errores de sintaxis de compilación.
¿Qué pasa si getMesas() lanza un Error con mensaje "503"? Se mostrará automáticamente el componente error.tsx mostrando el mensaje "503" en pantalla.
BLOQUE D:  
¿MenuPage va a necesitar loading.tsx y error.tsx también? Decide antes de empezar si los vas a crear o no, y anota la razón.
¿Crear loading.tsx en /menu? SÍ / NO — razón: ___________
¿Crear error.tsx en /menu? SÍ / NO — razón: ___________
¿Crear loading.tsx en /menu? SÍ — razón: la página de menú normalmente depende de fetch de datos (productos, categorías, disponibilidad, imágenes). Tener un loading.tsx mejora la percepción de velocidad y evita pantallas vacías mientras se resuelve el render del route segment en Next.js App Router.

¿Crear error.tsx en /menu? SÍ — razón: /menu es una ruta crítica orientada al usuario y puede fallar por errores de red, API o datos corruptos. Un error.tsx permite mostrar una recuperación controlada (“reintentar”, mensaje amigable) en lugar de romper toda la experiencia.

