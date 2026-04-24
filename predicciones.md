El componente PlatoCard recibe un plato como prop. ¿Qué propiedades tiene un plato según el modelo de datos del sistema?
LAS PROPIEDADES QUE TIENE SON ID, NOMBRE, PRECIO, CATEGORIA Y DISPONIBLE.

¿Qué tipo TypeScript corresponde a cada una? Escríbelo aquí antes de ver el código:
_id:          string
nombre:       string
precio:       number
categoria:    string
disponible:   boolean

BLOQUE D:
¿Qué props recibe MesaCard? (mira tu implementación de días anteriores)
Props de MesaCard
mesa: Mesa
onClick: (mesa: Mesa) => void

¿TypeScript puede inferir el tipo de retorno de una función que retorna JSX sin que lo declares?
TypeScript y JSX
TypeScript infiere automáticamente el retorno (JSX.Element)
No es obligatorio escribir : JSX.Element