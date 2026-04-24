El componente PlatoCard recibe un plato como prop. ¿Qué propiedades tiene un plato según el modelo de datos del sistema?
LAS PROPIEDADES QUE TIENE SON ID, NOMBRE, PRECIO, CATEGORIA Y DISPONIBLE.

¿Qué tipo TypeScript corresponde a cada una? Escríbelo aquí antes de ver el código:
_id:          string
nombre:       string
precio:       number
categoria:    string
disponible:   boolean

bloque B:
¿Cuántos archivos vas a renombrar en total? Lista sus nombres.
11 archivos
NavBar.jsx    components/NavBar.tsx
PlatoCard.jsx components/PlatoCard.tsx
MesaCard.jsx  components/MesaCard.tsx

# Pages
MenuPage.jsx       pages/MenuPage.tsx
MesasPage.jsx      pages/MesasPage.tsx
CarritoPage.jsx    pages/CarritoPage.tsx
DetalleMesa.jsx    pages/DetalleMesa.tsx
NotFound.jsx       pages/NotFound.tsx

# Context
PedidoContext.jsx context/PedidoContext.tsx

# Raíz
 App.jsx  App.tsx
 main.jsx main.tsx

¿En qué tipo de líneas crees que aparecerá el primer error TS?
Primeros errores salen en:

props
useState([])
children
funciones sin tipo

BLOQUE D:
¿Qué props recibe MesaCard? (mira tu implementación de días anteriores)
Props de MesaCard
mesa: Mesa
onClick: (mesa: Mesa) => void

¿TypeScript puede inferir el tipo de retorno de una función que retorna JSX sin que lo declares?
TypeScript y JSX
TypeScript infiere automáticamente el retorno (JSX.Element)
No es obligatorio escribir : JSX.Element


BLOQUE E:
Si getMesas() retorna Promise<Mesa[]>, 
¿qué tipo tiene 'mesas' en este código?
const mesas = await getMesas();

Mesas es de tipo Mesa[]

