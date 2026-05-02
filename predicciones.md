BLOQUE A:
¿Qué archivos del proyecto actual ya tienen declaradas interfaces que van a quedar duplicadas cuando crees types/index.ts? Listarlos antes de continuar.
Archivos con tipos duplicados: 
context/PedidoContext.tsx
components/OrderForm.jsx / OrderForm.clase.jsx
components/PlatoCard.tsx
components/MesaCard.tsx
pages/CarritoPage.tsx
data/mesas.mock.ts
Tipos que se repiten: Pedido
ItemPedido / OrderItem
Plato
Mesa
Props tipo ...Props (ej: PlatoCardProps, OrderFormProps)

BLOQUE B 
¿Cuántas interfaces/types duplicados hay en total en api.ts, 
PlatoCard.tsx y MesaCard.tsx que vas a eliminar en este bloque?

Cantidad de declaraciones duplicadas que vas a eliminar: 5
Tipos que se van a eliminar de api.ts: HAY 3 PARA ELIMINAR MESA, PEDIDO, TIPOPEDIDO.

BLOQUE C
PedidoContext actualmente tiene 5 funciones: agregarPlato, quitarPlato, cambiarTipo, asignarMesa y limpiarPedido. ¿Cuál es el tipo exacto de cada parámetro según los modelos en types/index.ts?
agregarPlato recibe: __plato: Plato_________
quitarPlato recibe: __platoId: number (o a veces id: number)_________
cambiarTipo recibe: __tipo: TipoPedido (por ejemplo: 'local' | 'delivery')
asignarMesa recibe: mesa: Mesa (o en algunos casos mesaId: number)
limpiarPedido recibe:() => void (no recibe parámetros)
BLOQUE E:

EVALUADOR:CARLOS CAMPUSANO

EVALUADA:DANIELA MENDOZA

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

