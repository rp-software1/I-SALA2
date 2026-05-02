BLOQUE A:

¿Tiene sentido tener un único archivo de tipos? ¿Qué ventaja concreta ves frente a declarar los tipos en cada componente?
Tener un único archivo de tipos (types/index.ts) ayuda a centralizar la definición de las estructuras de datos del proyecto. La principal ventaja es evitar la duplicación de interfaces y mantener consistencia en toda la aplicación. Si un tipo cambia (por ejemplo, Mesa o Pedido), solo se actualiza en un lugar y todos los componentes lo reflejan automáticamente.

Además, mejora la mantenibilidad y la escalabilidad del proyecto, ya que facilita reutilizar tipos entre contextos, páginas y componentes sin redefinirlos.

En cambio, declarar tipos en cada componente puede ser útil en casos muy específicos o pequeños, pero a medida que el proyecto crece, genera duplicación, inconsistencias y mayor probabilidad de errores.


BLOQUE B:

¿Qué pasa con el autocompletado en el IDE ahora que los tipos están en un solo lugar?
MEJORA EL RENDIMIENTO Y REDUCE DUPLICADOS, PORQUE AHORA TODO VIENE DE UNA SOLO FUENTE CENTRAL QUE SERIA EN ESTE CASO TYPES/index.ts.
BLOQUE C:
 ¿Qué error de runtime podría haberse producido sin el guard if (!context) throw? Piensa en un escenario concreto.
 Sin el guard, si un componente usa usePedido fuera de PedidoProvider, el contexto sería undefined y al intentar acceder a sus propiedades se produciría un error de runtime como:
"Cannot read properties of undefined"
Esto dificulta el debugging, mientras que el guard permite lanzar un error claro y controlado indicando el problema.

 BLOQUE D : Exploración con Claude
  "¿Qué es un Intersection Type en TypeScript? Muéstrame cómo usarlo para combinar Mesa con un campo extra { estaSeleccionada: boolean } sin modificar la interface Mesa original."
  Un Intersection Type en TypeScript permite combinar varios tipos en uno solo usando el operador &. El resultado es un tipo que tiene todas las propiedades de los tipos combinados.

"Tengo este código en TypeScript:
      const estado: EstadoMesa = "disponible";
   ¿Qué pasa si escribo estado = "cerrado"? ¿Por qué TypeScript lo rechaza?
   Explícalo como si fuera la primera vez que veo union types."

Sobre estado = "cerrado"
Si EstadoMesa es algo como:
type EstadoMesa = "disponible" | "ocupado";
Entonces estás usando un union type, que significa:
“esta variable solo puede ser uno de estos valores exactos”.
Por eso:
const estado: EstadoMesa = "disponible";
estado = "cerrado"; //  error
TypeScript lo rechaza porque "cerrado" no está dentro de las opciones permitidas.
Es como una lista cerrada de valores válidos.

"En nuestro PedidoContext.tsx usamos:
      createContext<2PedidoContextType | undefined>(undefined)
   ¿Por qué no simplemente createContext<2PedidoContextType>({} as PedidoContextType)?
   ¿Qué riesgo real tiene la segunda versión en una app de restaurante?"

Esta forma:
createContext<2PedidoContextType | undefined>(undefined)
te obliga a verificar que el contexto existe antes de usarlo.
En cambio:
createContext<2PedidoContextType>({} as PedidoContextType)
le estás diciendo a TypeScript:
“confía en mí, esto tiene todos los datos”… aunque en realidad es un objeto vacío.
Riesgo real en una app de restaurante:
Podrías usar el contexto sin haber envuelto el componente en el Provider, y no fallará en compilación… pero en runtime tendrás undefined en funciones o datos (por ejemplo, agregarPedido() no existe), causando errores difíciles de detectar.

BLOQUE E:

Estudinte A

Estudiante B

1. ¿Qué archivo creamos hoy que no existía antes? ¿Para qué sirve?
Probablemente crearon algo como:
PedidoContext.tsx o
context/PedidoContext.tsx o
un archivo en types/
¿Para qué sirve?
Sirve para centralizar estado o definiciones:
Si es PedidoContext: permite compartir datos del pedido entre componentes sin pasar props manualmente.

Si es types/index.ts: centraliza los tipos de TypeScript para todo el proyecto.
2. Sobre types/index.ts
Sin ver tu archivo exacto no puedo contar el número real, pero la idea es que recuerdes algo como:
X type
Y interface

Diferencia clave:

interface → se usa principalmente para estructuras de objetos y es extensible (puedes hacer extends o merging).
type → es más flexible, puede representar uniones, primitivas, tuplas, etc.

Ejemplo mental:

interface = “forma de un objeto”
type = “cualquier tipo posible”

3. ¿Por qué usar createContext<PedidoContextType | undefined>?

Porque al inicio no hay un valor garantizado.

React crea el contexto antes de que el Provider lo envuelva, entonces:

Puede existir un momento donde el contexto sea undefined
TypeScript te obliga a manejar ese caso

Esto evita errores silenciosos y te fuerza a usar el contexto correctamente dentro de su Provider.

4. Si el backend agrega activo: boolean a Mesa

Solo deberías cambiar:

1 archivo: donde defines el tipo (types/index.ts)

Después, TypeScript hace el trabajo pesado:

Te marcará errores en todos los lugares donde:
falte ese campo
estés creando objetos Mesa incompletos

Es decir, no tienes que buscar manualmente, el IDE te guía.

5. ¿Qué hace usePedido() y por qué es mejor?

usePedido() es un custom hook que:

Encapsula useContext(PedidoContext)
Maneja validaciones (como evitar undefined)
Devuelve directamente lo que necesitas

Ventajas sobre usar useContext directo:

Evita repetir lógica en cada componente
Centraliza errores (ej: “usar fuera del Provider”)
Hace el código más limpio y consistente
Si cambias algo del contexto, lo haces en un solo lugar

ERRORES TOTALES QUE QUEDAN PENDIENTES SON: 22