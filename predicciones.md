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
useParams<{ mesaId: string }>() — ¿el campo mesaId del objeto retornado tiene tipo string o string | undefined? Predice el tipo antes de probarlo.
Tipo de mesaId después de useParams<{ mesaId: string }>():STRING UNDEFINED
¿Necesitas un guard de undefined o TypeScript ya garantiza que es string? SI LO NECESITA OBLIGATORIAMENTE

                      