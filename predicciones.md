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

